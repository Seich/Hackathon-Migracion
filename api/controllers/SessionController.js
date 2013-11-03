/**
 * SessionController
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
		res.view('session/new');
	},

	create: function(req, res, next){
		if(!req.param('email') || !req.param('password')){
			var usernamePasswordRequiredError = [{name: 'usernamePasswordRequired', message:'Ingrese correo y contraseña.'}];

			req.session.flash={
				err: usernamePasswordRequiredError
			}
			res.redirect('/session/new');
			return;
		}

		User.findOne({emailAddress: req.param('email')}).done(function(err, user){
			if(err) return next(err);
			if(!user){
				var noAccountError=[{name:'noAccount', message:'La dirección de correo no fue encontrada.'}];
				req.session.flash={
					err: noAccountError
				}
				res.redirect('/session/new');
				return;
			}
			//hacer comparacion con md5
			var passwordHash = require('password-hash');
			if( !passwordHash.verify(req.param('password'), user.password_hash)){
				var passwordError=[{name:'passwordError', message:'La contraseña es inválida.'}];
				req.session.flash={
					err: passwordError
				}
				res.redirect('/session/new');
				return;
			}

			req.session.authenticated = true;
			req.session.User = user;
			res.redirect('/dashboard');

		});
	},
	destroy: function(req, res, next){
		req.session.destroy();
		res.redirect('/home');
	},
  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to SessionController)
   */
  _config: {}

  
};

