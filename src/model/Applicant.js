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
    define(['ApiClient', 'model/Address', 'model/IdNumber'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Address'), require('./IdNumber'));
  } else {
    // Browser globals (root is window)
    if (!root.Onfido) {
      root.Onfido = {};
    }
    root.Onfido.Applicant = factory(root.Onfido.ApiClient, root.Onfido.Address, root.Onfido.IdNumber);
  }
}(this, function(ApiClient, Address, IdNumber) {
  'use strict';



  /**
   * The Applicant model module.
   * @module model/Applicant
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>Applicant</code>.
   * @alias module:model/Applicant
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Applicant</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Applicant} obj Optional instance to populate.
   * @return {module:model/Applicant} The populated <code>Applicant</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }
      if (data.hasOwnProperty('delete_at')) {
        obj['delete_at'] = ApiClient.convertToType(data['delete_at'], 'Date');
      }
      if (data.hasOwnProperty('href')) {
        obj['href'] = ApiClient.convertToType(data['href'], 'String');
      }
      if (data.hasOwnProperty('sandbox')) {
        obj['sandbox'] = ApiClient.convertToType(data['sandbox'], 'Boolean');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('first_name')) {
        obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
      }
      if (data.hasOwnProperty('middle_name')) {
        obj['middle_name'] = ApiClient.convertToType(data['middle_name'], 'String');
      }
      if (data.hasOwnProperty('last_name')) {
        obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('gender')) {
        obj['gender'] = ApiClient.convertToType(data['gender'], 'String');
      }
      if (data.hasOwnProperty('dob')) {
        obj['dob'] = ApiClient.convertToType(data['dob'], 'Date');
      }
      if (data.hasOwnProperty('telephone')) {
        obj['telephone'] = ApiClient.convertToType(data['telephone'], 'String');
      }
      if (data.hasOwnProperty('mobile')) {
        obj['mobile'] = ApiClient.convertToType(data['mobile'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('nationality')) {
        obj['nationality'] = ApiClient.convertToType(data['nationality'], 'String');
      }
      if (data.hasOwnProperty('mothers_maiden_name')) {
        obj['mothers_maiden_name'] = ApiClient.convertToType(data['mothers_maiden_name'], 'String');
      }
      if (data.hasOwnProperty('country_of_birth')) {
        obj['country_of_birth'] = ApiClient.convertToType(data['country_of_birth'], 'String');
      }
      if (data.hasOwnProperty('town_of_birth')) {
        obj['town_of_birth'] = ApiClient.convertToType(data['town_of_birth'], 'String');
      }
      if (data.hasOwnProperty('previous_last_name')) {
        obj['previous_last_name'] = ApiClient.convertToType(data['previous_last_name'], 'String');
      }
      if (data.hasOwnProperty('addresses')) {
        obj['addresses'] = ApiClient.convertToType(data['addresses'], [Address]);
      }
      if (data.hasOwnProperty('id_numbers')) {
        obj['id_numbers'] = ApiClient.convertToType(data['id_numbers'], [IdNumber]);
      }
    }
    return obj;
  }

  /**
   * The unique identifier for the applicant. Read-only.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The date and time when this applicant was created. Read-only.
   * @member {Date} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * The date and time when this applicant is scheduled to be deleted. Read-only.
   * @member {Date} delete_at
   */
  exports.prototype['delete_at'] = undefined;
  /**
   * The uri of this resource. Read-only.
   * @member {String} href
   */
  exports.prototype['href'] = undefined;
  /**
   * Read-only.
   * @member {Boolean} sandbox
   */
  exports.prototype['sandbox'] = undefined;
  /**
   * The applicant’s title
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * The applicant’s first name
   * @member {String} first_name
   */
  exports.prototype['first_name'] = undefined;
  /**
   * The applicant’s middle name(s) or initial
   * @member {String} middle_name
   */
  exports.prototype['middle_name'] = undefined;
  /**
   * The applicant’s surname
   * @member {String} last_name
   */
  exports.prototype['last_name'] = undefined;
  /**
   * The applicant’s email address. Required if doing a US check or a standard UK check.
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * The applicant’s gender. Valid values are male and female.
   * @member {String} gender
   */
  exports.prototype['gender'] = undefined;
  /**
   * The applicant’s date of birth
   * @member {Date} dob
   */
  exports.prototype['dob'] = undefined;
  /**
   * The applicant’s landline phone number
   * @member {String} telephone
   */
  exports.prototype['telephone'] = undefined;
  /**
   * The applicant’s mobile phone number
   * @member {String} mobile
   */
  exports.prototype['mobile'] = undefined;
  /**
   * The country where this applicant will be checked. This must be a three-letter ISO code e.g. GBR or USA
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * The applicant's nationality. This must be a three-letter ISO code e.g. GBR or USA
   * @member {String} nationality
   */
  exports.prototype['nationality'] = undefined;
  /**
   * The applicant’s mothers maiden name
   * @member {String} mothers_maiden_name
   */
  exports.prototype['mothers_maiden_name'] = undefined;
  /**
   * The applicant’s country of birth
   * @member {String} country_of_birth
   */
  exports.prototype['country_of_birth'] = undefined;
  /**
   * The applicant’s town of birth
   * @member {String} town_of_birth
   */
  exports.prototype['town_of_birth'] = undefined;
  /**
   * The applicant’s previous last name
   * @member {String} previous_last_name
   */
  exports.prototype['previous_last_name'] = undefined;
  /**
   * @member {Array.<module:model/Address>} addresses
   */
  exports.prototype['addresses'] = undefined;
  /**
   * @member {Array.<module:model/IdNumber>} id_numbers
   */
  exports.prototype['id_numbers'] = undefined;


  /**
   * Returns The unique identifier for the applicant. Read-only.
   * @return {String}
   */
  exports.prototype.getId = function() {
    return this['id'];
  }

  /**
   * Sets The unique identifier for the applicant. Read-only.
   * @param {String} id The unique identifier for the applicant. Read-only.
   */
  exports.prototype.setId = function(id) {
    this['id'] = id;
  }


  /**
   * Returns The date and time when this applicant was created. Read-only.
   * @return {Date}
   */
  exports.prototype.getCreatedAt = function() {
    return this['created_at'];
  }

  /**
   * Sets The date and time when this applicant was created. Read-only.
   * @param {Date} created_at The date and time when this applicant was created. Read-only.
   */
  exports.prototype.setCreatedAt = function(created_at) {
    this['created_at'] = created_at;
  }


  /**
   * Returns The date and time when this applicant is scheduled to be deleted. Read-only.
   * @return {Date}
   */
  exports.prototype.getDeleteAt = function() {
    return this['delete_at'];
  }

  /**
   * Sets The date and time when this applicant is scheduled to be deleted. Read-only.
   * @param {Date} delete_at The date and time when this applicant is scheduled to be deleted. Read-only.
   */
  exports.prototype.setDeleteAt = function(delete_at) {
    this['delete_at'] = delete_at;
  }


  /**
   * Returns The uri of this resource. Read-only.
   * @return {String}
   */
  exports.prototype.getHref = function() {
    return this['href'];
  }

  /**
   * Sets The uri of this resource. Read-only.
   * @param {String} href The uri of this resource. Read-only.
   */
  exports.prototype.setHref = function(href) {
    this['href'] = href;
  }


  /**
   * Returns Read-only.
   * @return {Boolean}
   */
  exports.prototype.getSandbox = function() {
    return this['sandbox'];
  }

  /**
   * Sets Read-only.
   * @param {Boolean} sandbox Read-only.
   */
  exports.prototype.setSandbox = function(sandbox) {
    this['sandbox'] = sandbox;
  }


  /**
   * Returns The applicant’s title
   * @return {String}
   */
  exports.prototype.getTitle = function() {
    return this['title'];
  }

  /**
   * Sets The applicant’s title
   * @param {String} title The applicant’s title
   */
  exports.prototype.setTitle = function(title) {
    this['title'] = title;
  }


  /**
   * Returns The applicant’s first name
   * @return {String}
   */
  exports.prototype.getFirstName = function() {
    return this['first_name'];
  }

  /**
   * Sets The applicant’s first name
   * @param {String} first_name The applicant’s first name
   */
  exports.prototype.setFirstName = function(first_name) {
    this['first_name'] = first_name;
  }


  /**
   * Returns The applicant’s middle name(s) or initial
   * @return {String}
   */
  exports.prototype.getMiddleName = function() {
    return this['middle_name'];
  }

  /**
   * Sets The applicant’s middle name(s) or initial
   * @param {String} middle_name The applicant’s middle name(s) or initial
   */
  exports.prototype.setMiddleName = function(middle_name) {
    this['middle_name'] = middle_name;
  }


  /**
   * Returns The applicant’s surname
   * @return {String}
   */
  exports.prototype.getLastName = function() {
    return this['last_name'];
  }

  /**
   * Sets The applicant’s surname
   * @param {String} last_name The applicant’s surname
   */
  exports.prototype.setLastName = function(last_name) {
    this['last_name'] = last_name;
  }


  /**
   * Returns The applicant’s email address. Required if doing a US check or a standard UK check.
   * @return {String}
   */
  exports.prototype.getEmail = function() {
    return this['email'];
  }

  /**
   * Sets The applicant’s email address. Required if doing a US check or a standard UK check.
   * @param {String} email The applicant’s email address. Required if doing a US check or a standard UK check.
   */
  exports.prototype.setEmail = function(email) {
    this['email'] = email;
  }


  /**
   * Returns The applicant’s gender. Valid values are male and female.
   * @return {String}
   */
  exports.prototype.getGender = function() {
    return this['gender'];
  }

  /**
   * Sets The applicant’s gender. Valid values are male and female.
   * @param {String} gender The applicant’s gender. Valid values are male and female.
   */
  exports.prototype.setGender = function(gender) {
    this['gender'] = gender;
  }


  /**
   * Returns The applicant’s date of birth
   * @return {Date}
   */
  exports.prototype.getDob = function() {
    return this['dob'];
  }

  /**
   * Sets The applicant’s date of birth
   * @param {Date} dob The applicant’s date of birth
   */
  exports.prototype.setDob = function(dob) {
    this['dob'] = dob;
  }


  /**
   * Returns The applicant’s landline phone number
   * @return {String}
   */
  exports.prototype.getTelephone = function() {
    return this['telephone'];
  }

  /**
   * Sets The applicant’s landline phone number
   * @param {String} telephone The applicant’s landline phone number
   */
  exports.prototype.setTelephone = function(telephone) {
    this['telephone'] = telephone;
  }


  /**
   * Returns The applicant’s mobile phone number
   * @return {String}
   */
  exports.prototype.getMobile = function() {
    return this['mobile'];
  }

  /**
   * Sets The applicant’s mobile phone number
   * @param {String} mobile The applicant’s mobile phone number
   */
  exports.prototype.setMobile = function(mobile) {
    this['mobile'] = mobile;
  }


  /**
   * Returns The country where this applicant will be checked. This must be a three-letter ISO code e.g. GBR or USA
   * @return {String}
   */
  exports.prototype.getCountry = function() {
    return this['country'];
  }

  /**
   * Sets The country where this applicant will be checked. This must be a three-letter ISO code e.g. GBR or USA
   * @param {String} country The country where this applicant will be checked. This must be a three-letter ISO code e.g. GBR or USA
   */
  exports.prototype.setCountry = function(country) {
    this['country'] = country;
  }


  /**
   * Returns The applicant's nationality. This must be a three-letter ISO code e.g. GBR or USA
   * @return {String}
   */
  exports.prototype.getNationality = function() {
    return this['nationality'];
  }

  /**
   * Sets The applicant's nationality. This must be a three-letter ISO code e.g. GBR or USA
   * @param {String} nationality The applicant's nationality. This must be a three-letter ISO code e.g. GBR or USA
   */
  exports.prototype.setNationality = function(nationality) {
    this['nationality'] = nationality;
  }


  /**
   * Returns The applicant’s mothers maiden name
   * @return {String}
   */
  exports.prototype.getMothersMaidenName = function() {
    return this['mothers_maiden_name'];
  }

  /**
   * Sets The applicant’s mothers maiden name
   * @param {String} mothers_maiden_name The applicant’s mothers maiden name
   */
  exports.prototype.setMothersMaidenName = function(mothers_maiden_name) {
    this['mothers_maiden_name'] = mothers_maiden_name;
  }


  /**
   * Returns The applicant’s country of birth
   * @return {String}
   */
  exports.prototype.getCountryOfBirth = function() {
    return this['country_of_birth'];
  }

  /**
   * Sets The applicant’s country of birth
   * @param {String} country_of_birth The applicant’s country of birth
   */
  exports.prototype.setCountryOfBirth = function(country_of_birth) {
    this['country_of_birth'] = country_of_birth;
  }


  /**
   * Returns The applicant’s town of birth
   * @return {String}
   */
  exports.prototype.getTownOfBirth = function() {
    return this['town_of_birth'];
  }

  /**
   * Sets The applicant’s town of birth
   * @param {String} town_of_birth The applicant’s town of birth
   */
  exports.prototype.setTownOfBirth = function(town_of_birth) {
    this['town_of_birth'] = town_of_birth;
  }


  /**
   * Returns The applicant’s previous last name
   * @return {String}
   */
  exports.prototype.getPreviousLastName = function() {
    return this['previous_last_name'];
  }

  /**
   * Sets The applicant’s previous last name
   * @param {String} previous_last_name The applicant’s previous last name
   */
  exports.prototype.setPreviousLastName = function(previous_last_name) {
    this['previous_last_name'] = previous_last_name;
  }


  /**
   * @return {Array.<module:model/Address>}
   */
  exports.prototype.getAddresses = function() {
    return this['addresses'];
  }

  /**
   * @param {Array.<module:model/Address>} addresses
   */
  exports.prototype.setAddresses = function(addresses) {
    this['addresses'] = addresses;
  }


  /**
   * @return {Array.<module:model/IdNumber>}
   */
  exports.prototype.getIdNumbers = function() {
    return this['id_numbers'];
  }

  /**
   * @param {Array.<module:model/IdNumber>} id_numbers
   */
  exports.prototype.setIdNumbers = function(id_numbers) {
    this['id_numbers'] = id_numbers;
  }



  return exports;
}));


