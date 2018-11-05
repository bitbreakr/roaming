"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
// import City from '../city'
// import State from '../state'
const fs = require("fs")
const path = require("path")
const glob = require("glob")
class Country {
  constructor() {
    this.all = []
    this.mergeAllFixtures()
  }
  async mergeAllFixtures() {
    glob
      .sync(path.resolve(__dirname, `../../fixtures/countries/*.json`))
      .forEach(file => {
        const req = require(path.resolve(file))
        this.all.push(req)
      })
  }
  async set(data) {
    for (let prop of Object.keys(data)) {
      this[prop] = data[prop]
    }
  }
  /**
   * Retrieve a country record from a given ISO2 country code
   * @param {string} ISO2 - the ISO2 country code
   * @returns {Promise} Country record
   * @throws {Error} If invalid country code given
   */
  async get(ISO2) {
    try {
      const country = JSON.parse(
        await fs.readFileSync(
          path.resolve(
            __dirname,
            `../../fixtures/countries/${ISO2.toLocaleLowerCase()}.json`
          ),
          "utf8"
        )
      )
      this.set(country)
      return country
    } catch (e) {
      throw new Error(`"${ISO2}" does not match any country`)
    }
  }
  /**
   *
   * @param {object} query - Object query matching any country prop
   * @example await filter({ region: 'Americas' })
   * @returns {array} Array of countries
   */
  async filter(query) {
    if (typeof query !== "object") {
      throw new Error(`Supplied query is not invalid`)
    }
    const prop = Object.keys(query)[0]
    const value = query[prop]
    if (typeof value == "object") {
      throw new Error(`Deep level query unsupported`)
    }
    const records = this.all.filter(record => {
      if (record[prop] === value) {
        return record[prop]
      }
    })
    return records
  }
}
const country = new Country()
exports.default = country
//# sourceMappingURL=index.js.map
