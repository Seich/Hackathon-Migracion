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
		  		required: true,
		  		remote: {
			    	url: "/user/email_exists",
			        type: "post"
			    }
		  	},
		  	password: {
		  		required: true,
		  		minlength: 6
		  	},
		  	birthDate: {
		  		required: true
		  	},
		  	password_hash_confirmation: {
		  		equalTo: "#password",
		  		minlength: 6
		  	}	
		},
		messages: {
		    emailAddress: {
		      	remote: "Esta dirección de correo ya esta registrada."
		    }
		},
		success: function(element) {
			element.text('OK!').addClass('valid')
		}
	});
});
