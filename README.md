![](logo.png)

# Roaming

[![Build Status](https://travis-ci.com/bitbreakr/roaming.svg?branch=develop)](https://travis-ci.com/bitbreakr/roaming)

##### Roaming is a module that let you get a country informations from a given ISO2 code and to also retrieve a list of countries from a certain given criteria such as the subregion.

## Install

```bash
yarn add roaming or npm install --save roaming
```

## Import

There are many ways to import the module, here is a list of ways you can import it according your environment and coding style.

```js
// 1.
const roaming = require('roaming');

// 2.
const { get, find } = require('roaming');

// 3.
import * as roaming from 'roaming';

// 4.
import { get, find } from 'roaming';
```

## How to use

### .get(countryCode: string)

Returns a country from a given ISO-2 country code

```js
/*
* This should output the country object of country
*  France with all props related to this latter one.
**/

// IIFE example:

(async () => {
	const france = await roaming.get('fr');

	// Outputs related country object
	console.log(france);
});
```

### .find(query: object)

```js
/*
* This should output a list of country objects
* that match the query. Queries of deep nested elements
* are not supported for the moment.
**/

// IIFE example:

async () => {
  const query = { subregion: "Western Europe" };
  const westernEurope = await roaming.find(query);

  // Outputs a list of countries matching the query
  console.log(westernEurope);
};
```

#### Some query examples

Get a list of countries by a given region:

```js

/*
* Available regions are:
* - 'Europe'
* - 'Asia'
* - 'Americas'
* - 'Africa'
* - 'Oceania'
* - 'Polar'
** /

const query = { region: "Asia" };
const asianCountries = await roaming.find(query);
```

Get a list of countries by a given subregion:

```js

/*
* Available subregions are:
* - 'Southern Europe'
* - 'Western Asia'
* - 'Southern Asia'
* - 'Caribbean'
* - 'Middle Africa'
* - 'South America'
* - 'Polynesia'
* - 'Western Europe'
* - 'Australia and New Zealand'
* - 'Northern Europe'
* - 'Western Africa'
* - 'Eastern Europe'
* - 'Eastern Africa'
* - 'Northern America'
* - 'South-Eastern Asia'
* - 'Southern Africa'
* - 'Central America'
* - 'Eastern Asia'
* - 'Northern Africa'
* - 'Melanesia'
* - 'Micronesia'
* - 'Central Asia'
** /

const query = { subregion: "South America" };
const southAmericaCountries = await roaming.find(query);
```

#### Queryable elements

|   Property |                            Description |   Type | Example        |
| ---------: | -------------------------------------: | -----: | -------------- |
|       Name |                     The country's name | string | France         |
| alpha2Code |                 The 2 letters ISO code | string | FR             |
| alpha3Code |                 The 3 letters ISO code | string | FRA            |
|    capital |                  The country's capital | string | Paris          |
|     region |    The region some countries belong to | string | Europe         |
|  subregion | The subregion some countries belong to | string | Western Europe |
