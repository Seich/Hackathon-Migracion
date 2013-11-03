/**
 * DashboardController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

 module.exports = {


  /**
   * Action blueprints:
   *    `/dashboard/index`
   *    `/dashboard`
   */ 
   index: function (req, res) {

    var pendingTransactions = [
    {
        transactionDate: "28/09/2013",
        transactionRecipient: "ENEE",
        transactionStatus: "Procesado"
    },

    {
        transactionDate: "28/10/2013",
        transactionRecipient: "SANAA",
        transactionStatus: "Retrasado"
    },

    {
        transactionDate: "15/10/2013",
        transactionRecipient: "Hondutel",
        transactionStatus: "Procesado"
    },

    {
        transactionDate: "1/05/2013",
        transactionRecipient: "CableColor",
        transactionStatus: "Procesado"
    }

    ];
    
    return res.view('dashboard/index',
        {
            pendingTransactions: pendingTransactions,
            currentBalance: 325.56,
            firstName: "Pedro",
            lastName: "Martínez"
        });
    },

    load : function (req , res) {
      Card.find().where({user_id: req.session.User.id }).exec(function(err, cards){
      if (err) {
        return res.send(err, 500);
      }
      return res.view('dashboard/load',{cards: cards});
      });
      
    },


  /**
   * Action blueprints:
   *    `/dashboard/settings`
   */
   settings: function (req, res) {

    return res.view('dashboard/settings');
},




  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to DashboardController)
   */
   _config: {}


};
