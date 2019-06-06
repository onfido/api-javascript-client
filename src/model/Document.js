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
    root.Onfido.Document = factory(root.Onfido.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The Document model module.
   * @module model/Document
   * @version 4.1.0
   */

  /**
   * Constructs a new <code>Document</code>.
   * @alias module:model/Document
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Document</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Document} obj Optional instance to populate.
   * @return {module:model/Document} The populated <code>Document</code> instance.
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
      if (data.hasOwnProperty('file_name')) {
        obj['file_name'] = ApiClient.convertToType(data['file_name'], 'String');
      }
      if (data.hasOwnProperty('file_size')) {
        obj['file_size'] = ApiClient.convertToType(data['file_size'], 'Number');
      }
      if (data.hasOwnProperty('file_type')) {
        obj['file_type'] = ApiClient.convertToType(data['file_type'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('side')) {
        obj['side'] = ApiClient.convertToType(data['side'], 'String');
      }
      if (data.hasOwnProperty('issuing_country')) {
        obj['issuing_country'] = ApiClient.convertToType(data['issuing_country'], 'String');
      }
      if (data.hasOwnProperty('href')) {
        obj['href'] = ApiClient.convertToType(data['href'], 'String');
      }
      if (data.hasOwnProperty('download_href')) {
        obj['download_href'] = ApiClient.convertToType(data['download_href'], 'String');
      }
    }
    return obj;
  }

  /**
   * The unique identifier for the document
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The date and time at which the document was uploaded
   * @member {Date} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * The name of the uploaded file
   * @member {String} file_name
   */
  exports.prototype['file_name'] = undefined;
  /**
   * The size of the file in bytes
   * @member {Number} file_size
   */
  exports.prototype['file_size'] = undefined;
  /**
   * The file type of the uploaded file
   * @member {String} file_type
   */
  exports.prototype['file_type'] = undefined;
  /**
   * The type of document
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * The side of the document, if applicable. The possible values are front and back
   * @member {String} side
   */
  exports.prototype['side'] = undefined;
  /**
   * The issuing country of the document, a 3-letter ISO code.
   * @member {String} issuing_country
   */
  exports.prototype['issuing_country'] = undefined;
  /**
   * The uri of this resource
   * @member {String} href
   */
  exports.prototype['href'] = undefined;
  /**
   * The uri that can be used to download the document
   * @member {String} download_href
   */
  exports.prototype['download_href'] = undefined;


  /**
   * Returns The unique identifier for the document
   * @return {String}
   */
  exports.prototype.getId = function() {
    return this['id'];
  }

  /**
   * Sets The unique identifier for the document
   * @param {String} id The unique identifier for the document
   */
  exports.prototype.setId = function(id) {
    this['id'] = id;
  }


  /**
   * Returns The date and time at which the document was uploaded
   * @return {Date}
   */
  exports.prototype.getCreatedAt = function() {
    return this['created_at'];
  }

  /**
   * Sets The date and time at which the document was uploaded
   * @param {Date} created_at The date and time at which the document was uploaded
   */
  exports.prototype.setCreatedAt = function(created_at) {
    this['created_at'] = created_at;
  }


  /**
   * Returns The name of the uploaded file
   * @return {String}
   */
  exports.prototype.getFileName = function() {
    return this['file_name'];
  }

  /**
   * Sets The name of the uploaded file
   * @param {String} file_name The name of the uploaded file
   */
  exports.prototype.setFileName = function(file_name) {
    this['file_name'] = file_name;
  }


  /**
   * Returns The size of the file in bytes
   * @return {Number}
   */
  exports.prototype.getFileSize = function() {
    return this['file_size'];
  }

  /**
   * Sets The size of the file in bytes
   * @param {Number} file_size The size of the file in bytes
   */
  exports.prototype.setFileSize = function(file_size) {
    this['file_size'] = file_size;
  }


  /**
   * Returns The file type of the uploaded file
   * @return {String}
   */
  exports.prototype.getFileType = function() {
    return this['file_type'];
  }

  /**
   * Sets The file type of the uploaded file
   * @param {String} file_type The file type of the uploaded file
   */
  exports.prototype.setFileType = function(file_type) {
    this['file_type'] = file_type;
  }


  /**
   * Returns The type of document
   * @return {String}
   */
  exports.prototype.getType = function() {
    return this['type'];
  }

  /**
   * Sets The type of document
   * @param {String} type The type of document
   */
  exports.prototype.setType = function(type) {
    this['type'] = type;
  }


  /**
   * Returns The side of the document, if applicable. The possible values are front and back
   * @return {String}
   */
  exports.prototype.getSide = function() {
    return this['side'];
  }

  /**
   * Sets The side of the document, if applicable. The possible values are front and back
   * @param {String} side The side of the document, if applicable. The possible values are front and back
   */
  exports.prototype.setSide = function(side) {
    this['side'] = side;
  }


  /**
   * Returns The issuing country of the document, a 3-letter ISO code.
   * @return {String}
   */
  exports.prototype.getIssuingCountry = function() {
    return this['issuing_country'];
  }

  /**
   * Sets The issuing country of the document, a 3-letter ISO code.
   * @param {String} issuing_country The issuing country of the document, a 3-letter ISO code.
   */
  exports.prototype.setIssuingCountry = function(issuing_country) {
    this['issuing_country'] = issuing_country;
  }


  /**
   * Returns The uri of this resource
   * @return {String}
   */
  exports.prototype.getHref = function() {
    return this['href'];
  }

  /**
   * Sets The uri of this resource
   * @param {String} href The uri of this resource
   */
  exports.prototype.setHref = function(href) {
    this['href'] = href;
  }


  /**
   * Returns The uri that can be used to download the document
   * @return {String}
   */
  exports.prototype.getDownloadHref = function() {
    return this['download_href'];
  }

  /**
   * Sets The uri that can be used to download the document
   * @param {String} download_href The uri that can be used to download the document
   */
  exports.prototype.setDownloadHref = function(download_href) {
    this['download_href'] = download_href;
  }



  return exports;
}));


