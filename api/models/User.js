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
  		maxLength: 40,
  		minLength: 5
  	},
  	lastName: {
  		type: 'string',
  		maxLength: 40,
  		minLength: 5
  	},
  	emailAddress: {
  		type: 'email',
  		required: true
  	},
  	username: {
  		type: 'string',
  		required: true
  	},
  	password_hash: {
  		type: 'string',
  		required: true
  	},
  	birthDate: {
  		type: 'date'
  	},
  	phoneNumber: {
  		type: 'integer'
  	}

    
  }

};
