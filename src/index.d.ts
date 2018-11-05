import { CountryIT } from "./lib/country"
/**
 * Retrieve a country record from a given ISO2 country code
 * @param {string} ISO2 - the ISO2 country code
 * @returns {Promise} Country record
 * @throws {Error} If invalid country code given
 */
export declare const get: (ISO: string) => Promise<CountryIT>
/**
 *
 * @param {object} query - Object query matching any country prop
 * @example await filter({ region: 'Americas' })
 * @returns {array} Array of countries
 */
export declare const find: (object: CountryIT) => Promise<CountryIT[]>
