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
    define(['ApiClient', 'model/ReportType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ReportType'));
  } else {
    // Browser globals (root is window)
    if (!root.Onfido) {
      root.Onfido = {};
    }
    root.Onfido.ReportTypeGroup = factory(root.Onfido.ApiClient, root.Onfido.ReportType);
  }
}(this, function(ApiClient, ReportType) {
  'use strict';



  /**
   * The ReportTypeGroup model module.
   * @module model/ReportTypeGroup
   * @version 3.1.0
   */

  /**
   * Constructs a new <code>ReportTypeGroup</code>.
   * @alias module:model/ReportTypeGroup
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ReportTypeGroup</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportTypeGroup} obj Optional instance to populate.
   * @return {module:model/ReportTypeGroup} The populated <code>ReportTypeGroup</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('group_only')) {
        obj['group_only'] = ApiClient.convertToType(data['group_only'], 'Boolean');
      }
      if (data.hasOwnProperty('report_types')) {
        obj['report_types'] = ApiClient.convertToType(data['report_types'], [ReportType]);
      }
    }
    return obj;
  }

  /**
   * The unique identifier for the group.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The group’s name, as specified under your account.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * If false, individual reports in that group can be requested; if true, all reports must be requested together.
   * @member {Boolean} group_only
   */
  exports.prototype['group_only'] = undefined;
  /**
   * A list of report types included in this group.
   * @member {Array.<module:model/ReportType>} report_types
   */
  exports.prototype['report_types'] = undefined;


  /**
   * Returns The unique identifier for the group.
   * @return {String}
   */
  exports.prototype.getId = function() {
    return this['id'];
  }

  /**
   * Sets The unique identifier for the group.
   * @param {String} id The unique identifier for the group.
   */
  exports.prototype.setId = function(id) {
    this['id'] = id;
  }


  /**
   * Returns The group’s name, as specified under your account.
   * @return {String}
   */
  exports.prototype.getName = function() {
    return this['name'];
  }

  /**
   * Sets The group’s name, as specified under your account.
   * @param {String} name The group’s name, as specified under your account.
   */
  exports.prototype.setName = function(name) {
    this['name'] = name;
  }


  /**
   * Returns If false, individual reports in that group can be requested; if true, all reports must be requested together.
   * @return {Boolean}
   */
  exports.prototype.getGroupOnly = function() {
    return this['group_only'];
  }

  /**
   * Sets If false, individual reports in that group can be requested; if true, all reports must be requested together.
   * @param {Boolean} group_only If false, individual reports in that group can be requested; if true, all reports must be requested together.
   */
  exports.prototype.setGroupOnly = function(group_only) {
    this['group_only'] = group_only;
  }


  /**
   * Returns A list of report types included in this group.
   * @return {Array.<module:model/ReportType>}
   */
  exports.prototype.getReportTypes = function() {
    return this['report_types'];
  }

  /**
   * Sets A list of report types included in this group.
   * @param {Array.<module:model/ReportType>} report_types A list of report types included in this group.
   */
  exports.prototype.setReportTypes = function(report_types) {
    this['report_types'] = report_types;
  }



  return exports;
}));


