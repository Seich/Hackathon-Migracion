/**
 * UserController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */


module.exports = {
    'new': function(req, res){
    	res.view();
    },
    'email_exists': function(req, res){
    	User.findOne({emailAddress: req.param('emailAddress')}, function(err, user){
    		if(err || user != undefined) {
    			res.send(false);
    		} else {
    			res.send(true);	
    		}
    		
    	});
    },
    'changePasswordValidation': function(req, res){
        res.send(req.param('password_hash').length >= 6);
    },
    create: function(req, res, next){
        var user = req.params.all();
        var passwordHash = require('password-hash');
        var hashedPassword = passwordHash.generate(user.password_hash);
        user.password_hash = hashedPassword;
        user.balance = 0.0;
    	User.create(user, function userCreated(err, user){
    		if(err){
    			req.session.flash ={err:err}

    			return res.redirect('/user/new');
    		}
            req.session.authenticated = true;
            req.session.User = user;
    		res.redirect('/user/show')
    	});
    	
    },
    update: function(req, res, next){
        if(req.param('password_hash').length > 5){
            var user = req.params.all();
            var passwordHash = require('password-hash');
            var hashedPassword = passwordHash.generate(user.password_hash);
            user.password_hash = hashedPassword;
            
            User.update({
              emailAddress: req.session.User.emailAddress
            },{
              firstName: req.param('firstName'), 
              lastName: req.param('lastName'), 
              password_hash: user.password_hash,
              birthDate: req.param('birthDate'),
              phoneNumber: req.param('phoneNumber')
            }, function(err, users) {
              // Error handling
              if(err){
                req.session.flash ={err:err}
                res.redirect('/user/edit');
              } else {
                req.session.User = users[0];
                res.redirect('/user/show');
              }
            });
        } else {
            User.update({
              emailAddress: req.session.User.emailAddress
            },{
              firstName: req.param('firstName'), 
              lastName: req.param('lastName'), 
              birthDate: req.param('birthDate'),
              phoneNumber: req.param('phoneNumber')
            }, function(err, users) {
              // Error handling
              if(err){
                req.session.flash ={err:err}
                res.redirect('/user/edit');
              } else {
                req.session.User = users[0];
                res.redirect('/user/show');
              }
            });
        }
        
        
    },
    'edit': function(req, res){
        User.findOne(req.session.User.id,function(err, user) {
            if(err){
                req.session.flash ={err:err}

                return res.redirect('/user/new');
            }
            res.view({
                user: user
            });
        });
    },
    show: function(req, res, next) {
    	User.findOne(req.session.User.id,function(err, user) {
    		if(err) return next(err);
    		if(!user) return next();
    		res.view({
    			user: user
    		});
    	});
    },


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to UserController)
   */
  _config: {}

  
};
