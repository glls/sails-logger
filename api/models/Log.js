/**
 * Log.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    //The component that creates the log (LS, EE, common, users, LPR, DSS, …)
    component: {
      type: 'string',
      required: true
    },
    session: {
      type: 'string',
      // required: true
    }, // priority
    /*
    1 error
    2 warn
    3 debug
    4 info
    5 verbose
    ...
    */
    level: {
      type: 'integer',
      defaultsTo: 4
    },
    //Message: error message
    message: {
      type: 'string',
      required: true
    },
    //Action: method of the API, POST, GET, DELETE
    method: {
      type: 'string',
      defaultsTo: ''
    },
    location: {
      type: 'string',
      defaultsTo: ''
    },
    //As example if is a POST, the input data of the API
    data: {
      type: 'string', // json ?
      defaultsTo: ''
    },

  }
};
