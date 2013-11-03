/**
 * Bank
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {
	schema: true,
	
	attributes: {
		name: {
			type: 'STRING'
		},

		//TODO: This should be moved to a different table.
		country: {
			type: 'STRING'
		},

		logo: {
			type: 'STRING'
		}
	}

};
