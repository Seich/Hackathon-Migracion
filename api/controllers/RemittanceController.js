module.exports = {
  _config: {},

  new: function(req, res) {
  	res.view();
  },

  create: function(req, res) {

  	/*Remittance.create({user_id: parseInt(req.session.User.id), quantity: parseFloat(30), destination: req.param('destination')}, function userCreated(err, rem){
    		if(err){
    			req.session.flash ={err:err}

    			return res.redirect('/user/new');
    		}
            req.session.authenticated = true;
            req.session.User = user;
    		res.redirect('/user/show')
    	});*/
  	/*var quantity = parseInt(req.param('quantity'));
  	var amount = 0;
  	
  	if(typeof req.param('services')[0].service == "string"){
  		amount = parseInt(req.param('services')[0].service);
  	} else{
  		_.each(req.param('services')[0].service, function(item){
	  		amount += parseInt(item);
	  	});
  	}
  	
  	if(amount > quantity){
  		var notEnoughMoney = [{name: 'notEnoughMoney', message:'La cantidad ingresada no cubre el monton total adeudado.'}];

		req.session.flash={
			err: notEnoughMoney
		}

		res.redirect('/remittance/new');
		return;
  	}*/
  	
  	res.redirect('/dashboard');
  }
};
