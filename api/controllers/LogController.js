/**
 * LogController
 *
 * @description :: Server-side logic for managing logs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  view: function(req, res) {
    Log.find()
      .exec(function(err, logs) {
        return res.view({
          logs: logs
        });
      });
  },


  dtjson: function(req, res) {
    Log.find()
      .exec(function(err, logs) {
        return res.json({
          data: logs
        });
      });
  },

};
