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
    define(['ApiClient', 'model/CheckWithReportIds'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CheckWithReportIds'));
  } else {
    // Browser globals (root is window)
    if (!root.Onfido) {
      root.Onfido = {};
    }
    root.Onfido.ChecksList = factory(root.Onfido.ApiClient, root.Onfido.CheckWithReportIds);
  }
}(this, function(ApiClient, CheckWithReportIds) {
  'use strict';



  /**
   * The ChecksList model module.
   * @module model/ChecksList
   * @version 2.0.1
   */

  /**
   * Constructs a new <code>ChecksList</code>.
   * @alias module:model/ChecksList
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ChecksList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChecksList} obj Optional instance to populate.
   * @return {module:model/ChecksList} The populated <code>ChecksList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('checks')) {
        obj['checks'] = ApiClient.convertToType(data['checks'], [CheckWithReportIds]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/CheckWithReportIds>} checks
   */
  exports.prototype['checks'] = undefined;


  /**
   * @return {Array.<module:model/CheckWithReportIds>}
   */
  exports.prototype.getChecks = function() {
    return this['checks'];
  }

  /**
   * @param {Array.<module:model/CheckWithReportIds>} checks
   */
  exports.prototype.setChecks = function(checks) {
    this['checks'] = checks;
  }



  return exports;
}));


