/**
 * LogController
 *
 * @description :: Server-side logic for managing logs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  view: function(req, res) {

    return res.view();

    /*
    var rows = 1000;

    Log.find()
      .limit(rows)
      .sort('createdAt DESC')
      .exec(function(err, logs) {
        return res.view({
          logs: logs
        });
      });
      */
  },


  dtjson: function(req, res) {
    var rows = 1000;

    Log.find()
      .limit(rows)
      .sort('createdAt DESC')
      .exec(function(err, logs) {
        return res.json({
          data: logs
        });
      });
  },

};
