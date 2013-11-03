$(document).ready(function(){
	$('.form-signup').validate({
		rules: {
			firstName: {
				required: true
		  	},
		  	lastName: {
		  		required: true
		  	},
		  	emailAddress: {
		      	email:true,
		  		required: true
		  	},
		  	username: {
		  		required: true
		  	},
		  	password_hash: {
		  		required: true,
		  		minlength: 6
		  	},
		  	birthDate: {
		  		required: true
		  	},
		  	password_hash_confirmation: {
		  		equalTo: "#password_hash",
		  		minlength: 6
		  	}	
		},
		success: function(element) {
			element.text('OK!').addClass('valid')
		}
	});
});
