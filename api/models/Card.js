/**
 * Card
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	user_id: 'integer',
  	owner_name: 'string',
  	expiration_date_month: 'date',
  	expiration_date_year: 'date',
  	card_number: 'string',
  	card_security_code: 'string',
  	billing_country: 'string',
  	billing_street: 'string',
  	billing_city: 'string',
  	billing_province: 'string',
  	postal_code: 'string',
  	phone_number: 'string' 
  }

};
