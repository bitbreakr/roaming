import Country, { CountryIT } from "../src/lib/country"
const fr = require("../src/fixtures/countries/fr.json")

describe(`#Country`, () => {
  describe(`#${Country.get.name}`, () => {
    it("It should return the according country record", async () => {
      const FIXTURE = fr
      const ARG = "fr"

      const x = await Country.get(ARG)

      expect(x).toEqual(FIXTURE)
    })

    it("Should throw an error if supplied country code is Invalid", async () => {
      let error
      const ARG = "LALA"

      try {
        await Country.get(ARG)
      } catch (e) {
        error = e
      }

      expect(error).toBeInstanceOf(Error)
    })
  })

  describe(`#${Country.filter.name}`, () => {
    const MATCHING_RECORDS = <CountryIT>[
      {
        name: "Austria",
        topLevelDomain: [".at"],
        alpha2Code: "AT",
        alpha3Code: "AUT",
        callingCodes: ["43"],
        capital: "Vienna",
        altSpellings: ["AT", "Österreich", "Osterreich", "Oesterreich"],
        region: "Europe",
        subregion: "Western Europe",
        population: 8725931,
        latlng: [47.33333333, 13.33333333],
        demonym: "Austrian",
        area: 83871,
        gini: 26,
        timezones: ["UTC+01:00"],
        borders: ["CZE", "DEU", "HUN", "ITA", "LIE", "SVK", "SVN", "CHE"],
        nativeName: "Österreich",
        numericCode: "040",
        currencies: [{ code: "EUR", name: "Euro", symbol: "€" }],
        languages: [
          {
            iso639_1: "de",
            iso639_2: "deu",
            name: "German",
            nativeName: "Deutsch"
          }
        ],
        translations: {
          de: "Österreich",
          es: "Austria",
          fr: "Autriche",
          ja: "オーストリア",
          it: "Austria",
          br: "áustria",
          pt: "áustria",
          nl: "Oostenrijk",
          hr: "Austrija",
          fa: "اتریش"
        },
        regionalBlocs: [
          {
            acronym: "EU",
            name: "European Union",
            otherAcronyms: [],
            otherNames: []
          }
        ],
        cioc: "AUT"
      },
      {
        name: "Belgium",
        topLevelDomain: [".be"],
        alpha2Code: "BE",
        alpha3Code: "BEL",
        callingCodes: ["32"],
        capital: "Brussels",
        altSpellings: [
          "BE",
          "België",
          "Belgie",
          "Belgien",
          "Belgique",
          "Kingdom of Belgium",
          "Koninkrijk België",
          "Royaume de Belgique",
          "Königreich Belgien"
        ],
        region: "Europe",
        subregion: "Western Europe",
        population: 11319511,
        latlng: [50.83333333, 4],
        demonym: "Belgian",
        area: 30528,
        gini: 33,
        timezones: ["UTC+01:00"],
        borders: ["FRA", "DEU", "LUX", "NLD"],
        nativeName: "België",
        numericCode: "056",
        currencies: [{ code: "EUR", name: "Euro", symbol: "€" }],
        languages: [
          {
            iso639_1: "nl",
            iso639_2: "nld",
            name: "Dutch",
            nativeName: "Nederlands"
          },
          {
            iso639_1: "fr",
            iso639_2: "fra",
            name: "French",
            nativeName: "français"
          },
          {
            iso639_1: "de",
            iso639_2: "deu",
            name: "German",
            nativeName: "Deutsch"
          }
        ],
        translations: {
          de: "Belgien",
          es: "Bélgica",
          fr: "Belgique",
          ja: "ベルギー",
          it: "Belgio",
          br: "Bélgica",
          pt: "Bélgica",
          nl: "België",
          hr: "Belgija",
          fa: "بلژیک"
        },
        regionalBlocs: [
          {
            acronym: "EU",
            name: "European Union",
            otherAcronyms: [],
            otherNames: []
          }
        ],
        cioc: "BEL"
      },
      {
        name: "Switzerland",
        topLevelDomain: [".ch"],
        alpha2Code: "CH",
        alpha3Code: "CHE",
        callingCodes: ["41"],
        capital: "Bern",
        altSpellings: [
          "CH",
          "Swiss Confederation",
          "Schweiz",
          "Suisse",
          "Svizzera",
          "Svizra"
        ],
        region: "Europe",
        subregion: "Western Europe",
        population: 8341600,
        latlng: [47, 8],
        demonym: "Swiss",
        area: 41284,
        gini: 33.7,
        timezones: ["UTC+01:00"],
        borders: ["AUT", "FRA", "ITA", "LIE", "DEU"],
        nativeName: "Schweiz",
        numericCode: "756",
        currencies: [{ code: "CHF", name: "Swiss franc", symbol: "Fr" }],
        languages: [
          {
            iso639_1: "de",
            iso639_2: "deu",
            name: "German",
            nativeName: "Deutsch"
          },
          {
            iso639_1: "fr",
            iso639_2: "fra",
            name: "French",
            nativeName: "français"
          },
          {
            iso639_1: "it",
            iso639_2: "ita",
            name: "Italian",
            nativeName: "Italiano"
          }
        ],
        translations: {
          de: "Schweiz",
          es: "Suiza",
          fr: "Suisse",
          ja: "スイス",
          it: "Svizzera",
          br: "Suíça",
          pt: "Suíça",
          nl: "Zwitserland",
          hr: "Švicarska",
          fa: "سوئیس"
        },
        regionalBlocs: [
          {
            acronym: "EFTA",
            name: "European Free Trade Association",
            otherAcronyms: [],
            otherNames: []
          }
        ],
        cioc: "SUI"
      },
      {
        name: "Germany",
        topLevelDomain: [".de"],
        alpha2Code: "DE",
        alpha3Code: "DEU",
        callingCodes: ["49"],
        capital: "Berlin",
        altSpellings: [
          "DE",
          "Federal Republic of Germany",
          "Bundesrepublik Deutschland"
        ],
        region: "Europe",
        subregion: "Western Europe",
        population: 81770900,
        latlng: [51, 9],
        demonym: "German",
        area: 357114,
        gini: 28.3,
        timezones: ["UTC+01:00"],
        borders: [
          "AUT",
          "BEL",
          "CZE",
          "DNK",
          "FRA",
          "LUX",
          "NLD",
          "POL",
          "CHE"
        ],
        nativeName: "Deutschland",
        numericCode: "276",
        currencies: [{ code: "EUR", name: "Euro", symbol: "€" }],
        languages: [
          {
            iso639_1: "de",
            iso639_2: "deu",
            name: "German",
            nativeName: "Deutsch"
          }
        ],
        translations: {
          de: "Deutschland",
          es: "Alemania",
          fr: "Allemagne",
          ja: "ドイツ",
          it: "Germania",
          br: "Alemanha",
          pt: "Alemanha",
          nl: "Duitsland",
          hr: "Njemačka",
          fa: "آلمان"
        },
        regionalBlocs: [
          {
            acronym: "EU",
            name: "European Union",
            otherAcronyms: [],
            otherNames: []
          }
        ],
        cioc: "GER"
      },
      {
        name: "France",
        topLevelDomain: [".fr"],
        alpha2Code: "FR",
        alpha3Code: "FRA",
        callingCodes: ["33"],
        capital: "Paris",
        altSpellings: ["FR", "French Republic", "République française"],
        region: "Europe",
        subregion: "Western Europe",
        population: 66710000,
        latlng: [46, 2],
        demonym: "French",
        area: 640679,
        gini: 32.7,
        timezones: [
          "UTC-10:00",
          "UTC-09:30",
          "UTC-09:00",
          "UTC-08:00",
          "UTC-04:00",
          "UTC-03:00",
          "UTC+01:00",
          "UTC+03:00",
          "UTC+04:00",
          "UTC+05:00",
          "UTC+11:00",
          "UTC+12:00"
        ],
        borders: ["AND", "BEL", "DEU", "ITA", "LUX", "MCO", "ESP", "CHE"],
        nativeName: "France",
        numericCode: "250",
        currencies: [{ code: "EUR", name: "Euro", symbol: "€" }],
        languages: [
          {
            iso639_1: "fr",
            iso639_2: "fra",
            name: "French",
            nativeName: "français"
          }
        ],
        translations: {
          de: "Frankreich",
          es: "Francia",
          fr: "France",
          ja: "フランス",
          it: "Francia",
          br: "França",
          pt: "França",
          nl: "Frankrijk",
          hr: "Francuska",
          fa: "فرانسه"
        },
        regionalBlocs: [
          {
            acronym: "EU",
            name: "European Union",
            otherAcronyms: [],
            otherNames: []
          }
        ],
        cioc: "FRA"
      },
      {
        name: "Liechtenstein",
        topLevelDomain: [".li"],
        alpha2Code: "LI",
        alpha3Code: "LIE",
        callingCodes: ["423"],
        capital: "Vaduz",
        altSpellings: [
          "LI",
          "Principality of Liechtenstein",
          "Fürstentum Liechtenstein"
        ],
        region: "Europe",
        subregion: "Western Europe",
        population: 37623,
        latlng: [47.26666666, 9.53333333],
        demonym: "Liechtensteiner",
        area: 160,
        gini: null,
        timezones: ["UTC+01:00"],
        borders: ["AUT", "CHE"],
        nativeName: "Liechtenstein",
        numericCode: "438",
        currencies: [{ code: "CHF", name: "Swiss franc", symbol: "Fr" }],
        languages: [
          {
            iso639_1: "de",
            iso639_2: "deu",
            name: "German",
            nativeName: "Deutsch"
          }
        ],
        translations: {
          de: "Liechtenstein",
          es: "Liechtenstein",
          fr: "Liechtenstein",
          ja: "リヒテンシュタイン",
          it: "Liechtenstein",
          br: "Liechtenstein",
          pt: "Listenstaine",
          nl: "Liechtenstein",
          hr: "Lihtenštajn",
          fa: "لیختن‌اشتاین"
        },
        regionalBlocs: [
          {
            acronym: "EFTA",
            name: "European Free Trade Association",
            otherAcronyms: [],
            otherNames: []
          }
        ],
        cioc: "LIE"
      },
      {
        name: "Luxembourg",
        topLevelDomain: [".lu"],
        alpha2Code: "LU",
        alpha3Code: "LUX",
        callingCodes: ["352"],
        capital: "Luxembourg",
        altSpellings: [
          "LU",
          "Grand Duchy of Luxembourg",
          "Grand-Duché de Luxembourg",
          "Großherzogtum Luxemburg",
          "Groussherzogtum Lëtzebuerg"
        ],
        region: "Europe",
        subregion: "Western Europe",
        population: 576200,
        latlng: [49.75, 6.16666666],
        demonym: "Luxembourger",
        area: 2586,
        gini: 30.8,
        timezones: ["UTC+01:00"],
        borders: ["BEL", "FRA", "DEU"],
        nativeName: "Luxembourg",
        numericCode: "442",
        currencies: [{ code: "EUR", name: "Euro", symbol: "€" }],
        languages: [
          {
            iso639_1: "fr",
            iso639_2: "fra",
            name: "French",
            nativeName: "français"
          },
          {
            iso639_1: "de",
            iso639_2: "deu",
            name: "German",
            nativeName: "Deutsch"
          },
          {
            iso639_1: "lb",
            iso639_2: "ltz",
            name: "Luxembourgish",
            nativeName: "Lëtzebuergesch"
          }
        ],
        translations: {
          de: "Luxemburg",
          es: "Luxemburgo",
          fr: "Luxembourg",
          ja: "ルクセンブルク",
          it: "Lussemburgo",
          br: "Luxemburgo",
          pt: "Luxemburgo",
          nl: "Luxemburg",
          hr: "Luksemburg",
          fa: "لوکزامبورگ"
        },
        regionalBlocs: [
          {
            acronym: "EU",
            name: "European Union",
            otherAcronyms: [],
            otherNames: []
          }
        ],
        cioc: "LUX"
      },
      {
        name: "Monaco",
        topLevelDomain: [".mc"],
        alpha2Code: "MC",
        alpha3Code: "MCO",
        callingCodes: ["377"],
        capital: "Monaco",
        altSpellings: ["MC", "Principality of Monaco", "Principauté de Monaco"],
        region: "Europe",
        subregion: "Western Europe",
        population: 38400,
        latlng: [43.73333333, 7.4],
        demonym: "Monegasque",
        area: 2.02,
        gini: null,
        timezones: ["UTC+01:00"],
        borders: ["FRA"],
        nativeName: "Monaco",
        numericCode: "492",
        currencies: [{ code: "EUR", name: "Euro", symbol: "€" }],
        languages: [
          {
            iso639_1: "fr",
            iso639_2: "fra",
            name: "French",
            nativeName: "français"
          }
        ],
        translations: {
          de: "Monaco",
          es: "Mónaco",
          fr: "Monaco",
          ja: "モナコ",
          it: "Principato di Monaco",
          br: "Mônaco",
          pt: "Mónaco",
          nl: "Monaco",
          hr: "Monako",
          fa: "موناکو"
        },
        regionalBlocs: [],
        cioc: "MON"
      },
      {
        name: "Netherlands",
        topLevelDomain: [".nl"],
        alpha2Code: "NL",
        alpha3Code: "NLD",
        callingCodes: ["31"],
        capital: "Amsterdam",
        altSpellings: ["NL", "Holland", "Nederland"],
        region: "Europe",
        subregion: "Western Europe",
        population: 17019800,
        latlng: [52.5, 5.75],
        demonym: "Dutch",
        area: 41850,
        gini: 30.9,
        timezones: ["UTC-04:00", "UTC+01:00"],
        borders: ["BEL", "DEU"],
        nativeName: "Nederland",
        numericCode: "528",
        currencies: [{ code: "EUR", name: "Euro", symbol: "€" }],
        languages: [
          {
            iso639_1: "nl",
            iso639_2: "nld",
            name: "Dutch",
            nativeName: "Nederlands"
          }
        ],
        translations: {
          de: "Niederlande",
          es: "Países Bajos",
          fr: "Pays-Bas",
          ja: "オランダ",
          it: "Paesi Bassi",
          br: "Holanda",
          pt: "Países Baixos",
          nl: "Nederland",
          hr: "Nizozemska",
          fa: "پادشاهی هلند"
        },
        regionalBlocs: [
          {
            acronym: "EU",
            name: "European Union",
            otherAcronyms: [],
            otherNames: []
          }
        ],
        cioc: "NED"
      }
    ]

    it("Should retrieve according records matching the query", async () => {
      const records = await Country.filter({ subregion: "Western Europe" })

      expect(records).toMatchObject(MATCHING_RECORDS)
    })

    it("Should throw an error if the search query is a deep level query", async () => {
      let error

      try {
        await Country.filter({
          languages: [
            {
              iso639_1: "de",
              iso639_2: "deu",
              name: "German",
              nativeName: "Deutsch"
            }
          ]
        })
      } catch (e) {
        error = e
      }

      expect(error).toBeInstanceOf(Error)
    })
  })
})
