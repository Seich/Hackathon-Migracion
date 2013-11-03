module.exports = {
  _config: {},

  new: function(req, res) {
  	res.view();
  },

  create: function(req, res) {
  	var quantity = parseInt(req.param('quantity'));
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
  	}
  	
  	res.send(req.body);
  }
};
