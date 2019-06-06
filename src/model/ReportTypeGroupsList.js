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
    define(['ApiClient', 'model/ReportTypeGroup'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ReportTypeGroup'));
  } else {
    // Browser globals (root is window)
    if (!root.Onfido) {
      root.Onfido = {};
    }
    root.Onfido.ReportTypeGroupsList = factory(root.Onfido.ApiClient, root.Onfido.ReportTypeGroup);
  }
}(this, function(ApiClient, ReportTypeGroup) {
  'use strict';



  /**
   * The ReportTypeGroupsList model module.
   * @module model/ReportTypeGroupsList
   * @version 4.1.0
   */

  /**
   * Constructs a new <code>ReportTypeGroupsList</code>.
   * @alias module:model/ReportTypeGroupsList
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ReportTypeGroupsList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportTypeGroupsList} obj Optional instance to populate.
   * @return {module:model/ReportTypeGroupsList} The populated <code>ReportTypeGroupsList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('report_type_groups')) {
        obj['report_type_groups'] = ApiClient.convertToType(data['report_type_groups'], [ReportTypeGroup]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/ReportTypeGroup>} report_type_groups
   */
  exports.prototype['report_type_groups'] = undefined;


  /**
   * @return {Array.<module:model/ReportTypeGroup>}
   */
  exports.prototype.getReportTypeGroups = function() {
    return this['report_type_groups'];
  }

  /**
   * @param {Array.<module:model/ReportTypeGroup>} report_type_groups
   */
  exports.prototype.setReportTypeGroups = function(report_type_groups) {
    this['report_type_groups'] = report_type_groups;
  }



  return exports;
}));


