/**
 * Onfido API
 * The Onfido API is used to submit check requests.
 *
 * OpenAPI spec version: 2.0.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.0.0-beta2
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Report'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Report'));
  } else {
    // Browser globals (root is window)
    if (!root.Onfido) {
      root.Onfido = {};
    }
    root.Onfido.ReportsList = factory(root.Onfido.ApiClient, root.Onfido.Report);
  }
}(this, function(ApiClient, Report) {
  'use strict';



  /**
   * The ReportsList model module.
   * @module model/ReportsList
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>ReportsList</code>.
   * @alias module:model/ReportsList
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ReportsList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportsList} obj Optional instance to populate.
   * @return {module:model/ReportsList} The populated <code>ReportsList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('reports')) {
        obj['reports'] = ApiClient.convertToType(data['reports'], [Report]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Report>} reports
   */
  exports.prototype['reports'] = undefined;


  /**
   * @return {Array.<module:model/Report>}
   */
  exports.prototype.getReports = function() {
    return this['reports'];
  }

  /**
   * @param {Array.<module:model/Report>} reports
   */
  exports.prototype.setReports = function(reports) {
    this['reports'] = reports;
  }



  return exports;
}));


