module.exports = {
	schema: true,
	attributes: {
		quantity: {
			type: 'FLOAT',
			required: true,
			decimal: true
		},

		destination: {
			type: 'STRING',
			require: true
		},

		user_id: {
			type: 'INTEGER'
		}
	}

};
