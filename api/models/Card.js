/**
 * Card
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {

  	user_id: 'INTEGER',
  	owner_name: 'STRING',
  	expiration_date_month: 'STRING',
  	expiration_date_year: 'STRING',
  	card_number: 'STRING',
  	card_security_code: 'STRING',
  	billing_country: 'STRING',
  	billing_street: 'STRING',
  	billing_city: 'STRING',
  	billing_province: 'STRING',
  	postal_code: 'STRING',
  	phone_number: 'STRING'
  	
  	/* e.g.
  	nickname: 'string'
  	*/
    
  }

};
