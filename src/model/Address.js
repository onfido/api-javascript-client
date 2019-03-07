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
    root.Onfido.Address = factory(root.Onfido.ApiClient, root.Onfido.GenericAddress);
  }
}(this, function(ApiClient, GenericAddress) {
  'use strict';



  /**
   * The Address model module.
   * @module model/Address
   * @version 3.1.0
   */

  /**
   * Constructs a new <code>Address</code>.
   * @alias module:model/Address
   * @class
   * @implements module:model/GenericAddress
   */
  var exports = function() {
    var _this = this;

    GenericAddress.call(_this);
  };

  /**
   * Constructs a <code>Address</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Address} obj Optional instance to populate.
   * @return {module:model/Address} The populated <code>Address</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      GenericAddress.constructFromObject(data, obj);
      if (data.hasOwnProperty('flat_number')) {
        obj['flat_number'] = ApiClient.convertToType(data['flat_number'], 'String');
      }
      if (data.hasOwnProperty('building_number')) {
        obj['building_number'] = ApiClient.convertToType(data['building_number'], 'String');
      }
      if (data.hasOwnProperty('building_name')) {
        obj['building_name'] = ApiClient.convertToType(data['building_name'], 'String');
      }
      if (data.hasOwnProperty('street')) {
        obj['street'] = ApiClient.convertToType(data['street'], 'String');
      }
      if (data.hasOwnProperty('sub_street')) {
        obj['sub_street'] = ApiClient.convertToType(data['sub_street'], 'String');
      }
      if (data.hasOwnProperty('town')) {
        obj['town'] = ApiClient.convertToType(data['town'], 'String');
      }
      if (data.hasOwnProperty('postcode')) {
        obj['postcode'] = ApiClient.convertToType(data['postcode'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('start_date')) {
        obj['start_date'] = ApiClient.convertToType(data['start_date'], 'Date');
      }
      if (data.hasOwnProperty('end_date')) {
        obj['end_date'] = ApiClient.convertToType(data['end_date'], 'Date');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
    }
    return obj;
  }

  /**
   * The flat number of this address
   * @member {String} flat_number
   */
  exports.prototype['flat_number'] = undefined;
  /**
   * The building number of this address
   * @member {String} building_number
   */
  exports.prototype['building_number'] = undefined;
  /**
   * The building name of this address
   * @member {String} building_name
   */
  exports.prototype['building_name'] = undefined;
  /**
   * The street of the applicant’s address
   * @member {String} street
   */
  exports.prototype['street'] = undefined;
  /**
   * The sub-street of the applicant’s address
   * @member {String} sub_street
   */
  exports.prototype['sub_street'] = undefined;
  /**
   * The town of the applicant’s address
   * @member {String} town
   */
  exports.prototype['town'] = undefined;
  /**
   * The postcode or ZIP of the applicant’s address
   * @member {String} postcode
   */
  exports.prototype['postcode'] = undefined;
  /**
   * The 3 character ISO country code of this address. For example, GBR is the country code for the United Kingdom
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * The date the applicant started living at this address
   * @member {Date} start_date
   */
  exports.prototype['start_date'] = undefined;
  /**
   * The date the applicant left this address. If current residence, leave null
   * @member {Date} end_date
   */
  exports.prototype['end_date'] = undefined;
  /**
   * The address state. US states must use the USPS abbreviation (see also ISO 3166-2:US), for example AK, CA, or TX.
   * @member {String} state
   */
  exports.prototype['state'] = undefined;

  // Implement GenericAddress interface:
  /**
   * The flat number of this address
   * @member {String} flat_number
   */
exports.prototype['flat_number'] = undefined;

  /**
   * The building number of this address
   * @member {String} building_number
   */
exports.prototype['building_number'] = undefined;

  /**
   * The building name of this address
   * @member {String} building_name
   */
exports.prototype['building_name'] = undefined;

  /**
   * The street of the applicant’s address
   * @member {String} street
   */
exports.prototype['street'] = undefined;

  /**
   * The sub-street of the applicant’s address
   * @member {String} sub_street
   */
exports.prototype['sub_street'] = undefined;

  /**
   * The town of the applicant’s address
   * @member {String} town
   */
exports.prototype['town'] = undefined;

  /**
   * The postcode or ZIP of the applicant’s address
   * @member {String} postcode
   */
exports.prototype['postcode'] = undefined;

  /**
   * The 3 character ISO country code of this address. For example, GBR is the country code for the United Kingdom
   * @member {String} country
   */
exports.prototype['country'] = undefined;


  /**
   * Returns The flat number of this address
   * @return {String}
   */
  exports.prototype.getFlatNumber = function() {
    return this['flat_number'];
  }

  /**
   * Sets The flat number of this address
   * @param {String} flat_number The flat number of this address
   */
  exports.prototype.setFlatNumber = function(flat_number) {
    this['flat_number'] = flat_number;
  }


  /**
   * Returns The building number of this address
   * @return {String}
   */
  exports.prototype.getBuildingNumber = function() {
    return this['building_number'];
  }

  /**
   * Sets The building number of this address
   * @param {String} building_number The building number of this address
   */
  exports.prototype.setBuildingNumber = function(building_number) {
    this['building_number'] = building_number;
  }


  /**
   * Returns The building name of this address
   * @return {String}
   */
  exports.prototype.getBuildingName = function() {
    return this['building_name'];
  }

  /**
   * Sets The building name of this address
   * @param {String} building_name The building name of this address
   */
  exports.prototype.setBuildingName = function(building_name) {
    this['building_name'] = building_name;
  }


  /**
   * Returns The street of the applicant’s address
   * @return {String}
   */
  exports.prototype.getStreet = function() {
    return this['street'];
  }

  /**
   * Sets The street of the applicant’s address
   * @param {String} street The street of the applicant’s address
   */
  exports.prototype.setStreet = function(street) {
    this['street'] = street;
  }


  /**
   * Returns The sub-street of the applicant’s address
   * @return {String}
   */
  exports.prototype.getSubStreet = function() {
    return this['sub_street'];
  }

  /**
   * Sets The sub-street of the applicant’s address
   * @param {String} sub_street The sub-street of the applicant’s address
   */
  exports.prototype.setSubStreet = function(sub_street) {
    this['sub_street'] = sub_street;
  }


  /**
   * Returns The town of the applicant’s address
   * @return {String}
   */
  exports.prototype.getTown = function() {
    return this['town'];
  }

  /**
   * Sets The town of the applicant’s address
   * @param {String} town The town of the applicant’s address
   */
  exports.prototype.setTown = function(town) {
    this['town'] = town;
  }


  /**
   * Returns The postcode or ZIP of the applicant’s address
   * @return {String}
   */
  exports.prototype.getPostcode = function() {
    return this['postcode'];
  }

  /**
   * Sets The postcode or ZIP of the applicant’s address
   * @param {String} postcode The postcode or ZIP of the applicant’s address
   */
  exports.prototype.setPostcode = function(postcode) {
    this['postcode'] = postcode;
  }


  /**
   * Returns The 3 character ISO country code of this address. For example, GBR is the country code for the United Kingdom
   * @return {String}
   */
  exports.prototype.getCountry = function() {
    return this['country'];
  }

  /**
   * Sets The 3 character ISO country code of this address. For example, GBR is the country code for the United Kingdom
   * @param {String} country The 3 character ISO country code of this address. For example, GBR is the country code for the United Kingdom
   */
  exports.prototype.setCountry = function(country) {
    this['country'] = country;
  }


  /**
   * Returns The date the applicant started living at this address
   * @return {Date}
   */
  exports.prototype.getStartDate = function() {
    return this['start_date'];
  }

  /**
   * Sets The date the applicant started living at this address
   * @param {Date} start_date The date the applicant started living at this address
   */
  exports.prototype.setStartDate = function(start_date) {
    this['start_date'] = start_date;
  }


  /**
   * Returns The date the applicant left this address. If current residence, leave null
   * @return {Date}
   */
  exports.prototype.getEndDate = function() {
    return this['end_date'];
  }

  /**
   * Sets The date the applicant left this address. If current residence, leave null
   * @param {Date} end_date The date the applicant left this address. If current residence, leave null
   */
  exports.prototype.setEndDate = function(end_date) {
    this['end_date'] = end_date;
  }


  /**
   * Returns The address state. US states must use the USPS abbreviation (see also ISO 3166-2:US), for example AK, CA, or TX.
   * @return {String}
   */
  exports.prototype.getState = function() {
    return this['state'];
  }

  /**
   * Sets The address state. US states must use the USPS abbreviation (see also ISO 3166-2:US), for example AK, CA, or TX.
   * @param {String} state The address state. US states must use the USPS abbreviation (see also ISO 3166-2:US), for example AK, CA, or TX.
   */
  exports.prototype.setState = function(state) {
    this['state'] = state;
  }



  return exports;
}));


