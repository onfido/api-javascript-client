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
    define(['ApiClient', 'model/ReportOption'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ReportOption'));
  } else {
    // Browser globals (root is window)
    if (!root.Onfido) {
      root.Onfido = {};
    }
    root.Onfido.ReportType = factory(root.Onfido.ApiClient, root.Onfido.ReportOption);
  }
}(this, function(ApiClient, ReportOption) {
  'use strict';



  /**
   * The ReportType model module.
   * @module model/ReportType
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>ReportType</code>.
   * @alias module:model/ReportType
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ReportType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportType} obj Optional instance to populate.
   * @return {module:model/ReportType} The populated <code>ReportType</code> instance.
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
      if (data.hasOwnProperty('variant')) {
        obj['variant'] = ApiClient.convertToType(data['variant'], 'String');
      }
      if (data.hasOwnProperty('options')) {
        obj['options'] = ApiClient.convertToType(data['options'], [ReportOption]);
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} variant
   */
  exports.prototype['variant'] = undefined;
  /**
   * @member {Array.<module:model/ReportOption>} options
   */
  exports.prototype['options'] = undefined;


  /**
   * @return {String}
   */
  exports.prototype.getId = function() {
    return this['id'];
  }

  /**
   * @param {String} id
   */
  exports.prototype.setId = function(id) {
    this['id'] = id;
  }


  /**
   * @return {String}
   */
  exports.prototype.getName = function() {
    return this['name'];
  }

  /**
   * @param {String} name
   */
  exports.prototype.setName = function(name) {
    this['name'] = name;
  }


  /**
   * @return {String}
   */
  exports.prototype.getVariant = function() {
    return this['variant'];
  }

  /**
   * @param {String} variant
   */
  exports.prototype.setVariant = function(variant) {
    this['variant'] = variant;
  }


  /**
   * @return {Array.<module:model/ReportOption>}
   */
  exports.prototype.getOptions = function() {
    return this['options'];
  }

  /**
   * @param {Array.<module:model/ReportOption>} options
   */
  exports.prototype.setOptions = function(options) {
    this['options'] = options;
  }



  return exports;
}));


