"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
const country_1 = require("./lib/country")
/**
 * Retrieve a country record from a given ISO2 country code
 * @param {string} ISO2 - the ISO2 country code
 * @returns {Promise} Country record
 * @throws {Error} If invalid country code given
 */
exports.get = ISO => {
  return country_1.default.get(ISO)
}
/**
 *
 * @param {object} query - Object query matching any country prop
 * @example await filter({ region: 'Americas' })
 * @returns {array} Array of countries
 */
exports.find = object => {
  return country_1.default.filter(object)
}
//# sourceMappingURL=index.js.map
