/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  schema: true,

  attributes: {
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
    toJSON: function(){
      var obj = this.toObject();
      delete obj.password_hash;
      return obj;
    }

    
  }

};
