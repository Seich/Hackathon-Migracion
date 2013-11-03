$(document).ready(function(){
	$('.form-signup').validate({
	rules: {
		firstName: {
  		type: 'string',
  		maxLength: 40
	  	},
	  	lastName: {
	  		type: 'string',
	  		maxLength: 40
	  	},
	  	emailAddress: {
	  		type: 'string',
	      email:true,
	  		required: true,
	      unique: true
	  	},
	  	username: {
	  		type: 'string',
	  		required: true,
	      unique: true
	  	},
	  	password_hash: {
	  		type: 'string',
	  		required: true,
	  		minlength: 6
	  	},
	  	birthDate: {
	  		type: 'date'
	  	},
	  	phoneNumber: {
	  		type: 'string'
	  	},
	  	confirmation_password_hash: {
	  		minlength: 6,
	  		equalTo: "#password_hash"
	  	}	
	},
	success: function(element) {
		element.text('OK!').addClass('valid')
	});
});