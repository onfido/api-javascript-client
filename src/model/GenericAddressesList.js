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
    define(['ApiClient', 'model/GenericAddress'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GenericAddress'));
  } else {
    // Browser globals (root is window)
    if (!root.Onfido) {
      root.Onfido = {};
    }
    root.Onfido.GenericAddressesList = factory(root.Onfido.ApiClient, root.Onfido.GenericAddress);
  }
}(this, function(ApiClient, GenericAddress) {
  'use strict';



  /**
   * The GenericAddressesList model module.
   * @module model/GenericAddressesList
   * @version 3.1.0
   */

  /**
   * Constructs a new <code>GenericAddressesList</code>.
   * @alias module:model/GenericAddressesList
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>GenericAddressesList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GenericAddressesList} obj Optional instance to populate.
   * @return {module:model/GenericAddressesList} The populated <code>GenericAddressesList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('addresses')) {
        obj['addresses'] = ApiClient.convertToType(data['addresses'], [GenericAddress]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/GenericAddress>} addresses
   */
  exports.prototype['addresses'] = undefined;


  /**
   * @return {Array.<module:model/GenericAddress>}
   */
  exports.prototype.getAddresses = function() {
    return this['addresses'];
  }

  /**
   * @param {Array.<module:model/GenericAddress>} addresses
   */
  exports.prototype.setAddresses = function(addresses) {
    this['addresses'] = addresses;
  }



  return exports;
}));


