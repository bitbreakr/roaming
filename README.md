# Roaming

[![Build Status](https://travis-ci.com/bitbreakr/roaming.svg?branch=develop)](https://travis-ci.com/bitbreakr/roaming)

##### Roaming is a module that let you get a country informations from a given ISO2 code and to also retrieve a list of countries from a certain given criteria such as the subregion.

## Install

```
yarn add roaming or npm install --save roaming
```

## How to use

### .get(countryCode: string)

Returns a country from a given ISO-2 country code

```
const roaming = require('roaming');

const france = roaming.get('fr');
```

## Usage
