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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Onfido) {
      root.Onfido = {};
    }
    root.Onfido.ReportOption = factory(root.Onfido.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The ReportOption model module.
   * @module model/ReportOption
   * @version 4.3.0
   */

  /**
   * Constructs a new <code>ReportOption</code>.
   * @alias module:model/ReportOption
   * @class
   * @param name {String} The name of the option to be enabled.
   */
  var exports = function(name) {
    var _this = this;

    _this['name'] = name;
  };

  /**
   * Constructs a <code>ReportOption</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportOption} obj Optional instance to populate.
   * @return {module:model/ReportOption} The populated <code>ReportOption</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * The name of the option to be enabled.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;


  /**
   * Returns The name of the option to be enabled.
   * @return {String}
   */
  exports.prototype.getName = function() {
    return this['name'];
  }

  /**
   * Sets The name of the option to be enabled.
   * @param {String} name The name of the option to be enabled.
   */
  exports.prototype.setName = function(name) {
    this['name'] = name;
  }



  return exports;
}));


