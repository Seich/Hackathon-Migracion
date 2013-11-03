module.exports = {
  _config: {},

  new: function(req, res) {
  	res.view();
  },

  create: function(req, res) {
  	res.send(req.body);
  }
};
