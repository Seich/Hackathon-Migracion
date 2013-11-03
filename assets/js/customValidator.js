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
		messages: {
		    emailAddress: {
		      	remote: "Esta dirección de correo ya esta registrada."
		    }
		},
		success: function(element) {
			element.text('OK!').addClass('valid')
		}
	});

	$('.form-edit').validate({
		rules: {
			firstName: {
				required: true
		  	},
		  	lastName: {
		  		required: true
		  	},
		  	birthDate: {
		  		required: true
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
