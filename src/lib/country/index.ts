// import City from '../city'
// import State from '../state'
const fs = require("fs")
const path = require("path")
const glob = require("glob")

export interface CountryIT {
  name?: string
  topLevelDomain?: string[]
  alpha2Code?: string
  alpha3Code?: string
  callingCodes?: string[]
  capital?: string
  altSpellings?: string[]
  region?: string
  subregion?: string
  population?: number
  latlng?: number[]
  demonym?: string
  area?: number
  gini?: number
  timezones?: string[]
  borders?: string[]
  nativeName?: string
  numericCode?: string
  currencies?: Currency[]
  languages?: Language[]
  translations?: Translations
  flag?: string
  regionalBlocs?: RegionalBloc[]
  cioc?: string
}

interface Currency {
  code: string
  name: string
  symbol: string
}

interface Language {
  iso639_1: string
  iso639_2: string
  name: string
  nativeName: string
}

interface RegionalBloc {
  acronym: string
  name: string
  otherAcronyms: any[]
  otherNames: any[]
}

interface Translations {
  de: string
  es: string
  fr: string
  ja: string
  it: string
  br: string
  pt: string
  nl: string
  hr: string
  fa: string
}

class Country implements CountryIT {
  name?: string
  topLevelDomain?: string[]
  alpha2Code?: string
  alpha3Code?: string
  callingCodes?: string[]
  capital?: string
  altSpellings?: string[]
  region?: string
  subregion?: string
  population?: number
  latlng?: number[]
  demonym?: string
  area?: number
  gini?: number
  timezones?: string[]
  borders?: string[]
  nativeName?: string
  numericCode?: string
  currencies?: Currency[]
  languages?: Language[]
  translations?: Translations
  flag?: string
  regionalBlocs?: RegionalBloc[]
  cioc?: string
  all: CountryIT[]

  constructor() {
    this.all = []
    this.mergeAllFixtures()
  }

  private async mergeAllFixtures() {
    glob
      .sync(path.resolve(__dirname, `../../fixtures/countries/*.json`))
      .forEach((file: any) => {
        const req = require(path.resolve(file))
        ;(this as any).all.push(req)
      })
  }

  private async set(data: CountryIT) {
    for (let prop of Object.keys(data as any)) {
      ;(this as any)[prop] = (data as any)[prop]
    }
  }

  async get(ISO2: string): Promise<CountryIT> {
    try {
      const country = JSON.parse(
        await fs.readFileSync(
          path.resolve(
            __dirname,
            `../../fixtures/countries/${ISO2.toLocaleLowerCase()}.json`
          ),
          "utf8"
        )
      ) as CountryIT

      this.set(country)

      return country
    } catch (e) {
      throw new Error(`"${ISO2}" does not match any country`)
    }
  }

  async filter(query: CountryIT): Promise<Array<CountryIT>> {
    if (typeof query !== "object") {
      throw new Error(`Supplied query is not invalid`)
    }

    const prop = Object.keys(query)[0]
    const value = (query as any)[prop]

    if (typeof value == "object") {
      throw new Error(`Deep level query unsupported`)
    }

    const records = this.all.filter((record: CountryIT) => {
      if ((record as any)[prop] === value) {
        return (record as any)[prop]
      }
    })

    return records
  }
}

const country = new Country()

export default country
