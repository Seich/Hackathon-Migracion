/**
 * BankPayment
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {
	schema: true,

	attributes: {
		
		// Belongs to Remittance
		remittance_id: {
			type: 'INTEGER'
		},

		// Has a service
		service_id: {
			type: 'INTEGER'
		},

		contract: {
			type: 'STRING'
		}
	  
	}
};
