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
    define(['ApiClient', 'model/LiveVideo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LiveVideo'));
  } else {
    // Browser globals (root is window)
    if (!root.Onfido) {
      root.Onfido = {};
    }
    root.Onfido.LiveVideosList = factory(root.Onfido.ApiClient, root.Onfido.LiveVideo);
  }
}(this, function(ApiClient, LiveVideo) {
  'use strict';



  /**
   * The LiveVideosList model module.
   * @module model/LiveVideosList
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>LiveVideosList</code>.
   * @alias module:model/LiveVideosList
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>LiveVideosList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LiveVideosList} obj Optional instance to populate.
   * @return {module:model/LiveVideosList} The populated <code>LiveVideosList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('live_videos')) {
        obj['live_videos'] = ApiClient.convertToType(data['live_videos'], [LiveVideo]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/LiveVideo>} live_videos
   */
  exports.prototype['live_videos'] = undefined;


  /**
   * @return {Array.<module:model/LiveVideo>}
   */
  exports.prototype.getLiveVideos = function() {
    return this['live_videos'];
  }

  /**
   * @param {Array.<module:model/LiveVideo>} live_videos
   */
  exports.prototype.setLiveVideos = function(live_videos) {
    this['live_videos'] = live_videos;
  }



  return exports;
}));


