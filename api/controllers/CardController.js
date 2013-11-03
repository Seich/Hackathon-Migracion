/**
 * CardController
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
		
	 create: function(req, res){
		var card = req.params.all();
		card.user_id = req.session.User.id;
		Card.create(card, function (err, card){
				if(err){
					console.log(err);
					req.session.flash ={err:err}
					return res.redirect('/card/newcard');
				}
				res.redirect('/dashboard');
			});
	 },

	newcard: function(req, res){
	 res.view('card/new',{});
	},

	reload: function(req, res){
		var am = parseFloat(req.param('amount')) + parseFloat(req.session.User.balance); 
		User.update({
			id: req.session.User.id
		},{
			balance : am
		}, function(err,users) {
			if(err){
				req.session.flash = { err:err }
				res.redirect('/dashboard/load');
			} else {
				req.session.User = users[0];
				res.redirect('/dashboard');
			}
		});

		
	},


	/**
	 * Overrides for the settings in `config/controllers.js`
	 * (specific to CardController)
	 */
	_config: {}

	
};
