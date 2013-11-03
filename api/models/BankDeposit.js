/**
 * BankDeposit
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {
	schema: true,

	attributes: {

		bank_id: {
			type: 'INTEGER'
		},

		remittance_id: {
			type: 'INTEGER'
		},

		account: {
			type: 'STRING'
		}
		
	}
};
