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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Onfido);
  }
}(this, function(expect, Onfido) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Onfido.Address();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Address', function() {
    it('should create an instance of Address', function() {
      // uncomment below and update the code to test Address
      //var instance = new Onfido.Address();
      //expect(instance).to.be.a(Onfido.Address);
    });

    it('should have the property flat_number (base name: "flat_number")', function() {
      // uncomment below and update the code to test the property flat_number
      //var instance = new Onfido.Address();
      //expect(instance).to.be();
    });

    it('should have the property building_number (base name: "building_number")', function() {
      // uncomment below and update the code to test the property building_number
      //var instance = new Onfido.Address();
      //expect(instance).to.be();
    });

    it('should have the property building_name (base name: "building_name")', function() {
      // uncomment below and update the code to test the property building_name
      //var instance = new Onfido.Address();
      //expect(instance).to.be();
    });

    it('should have the property street (base name: "street")', function() {
      // uncomment below and update the code to test the property street
      //var instance = new Onfido.Address();
      //expect(instance).to.be();
    });

    it('should have the property sub_street (base name: "sub_street")', function() {
      // uncomment below and update the code to test the property sub_street
      //var instance = new Onfido.Address();
      //expect(instance).to.be();
    });

    it('should have the property town (base name: "town")', function() {
      // uncomment below and update the code to test the property town
      //var instance = new Onfido.Address();
      //expect(instance).to.be();
    });

    it('should have the property postcode (base name: "postcode")', function() {
      // uncomment below and update the code to test the property postcode
      //var instance = new Onfido.Address();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "country")', function() {
      // uncomment below and update the code to test the property country
      //var instance = new Onfido.Address();
      //expect(instance).to.be();
    });

    it('should have the property start_date (base name: "start_date")', function() {
      // uncomment below and update the code to test the property start_date
      //var instance = new Onfido.Address();
      //expect(instance).to.be();
    });

    it('should have the property end_date (base name: "end_date")', function() {
      // uncomment below and update the code to test the property end_date
      //var instance = new Onfido.Address();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instance = new Onfido.Address();
      //expect(instance).to.be();
    });

  });

}));
