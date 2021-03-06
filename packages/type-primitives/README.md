[![polkadotjs](https://img.shields.io/badge/polkadot-js-orange.svg?style=flat-square)](https://polkadot.js.org)
![isc](https://img.shields.io/badge/license-ISC-lightgrey.svg?style=flat-square)
[![style](https://img.shields.io/badge/code%20style-semistandard-lightgrey.svg?style=flat-square)](https://github.com/Flet/semistandard)
[![npm](https://img.shields.io/npm/v/@polkadot/primitives.svg?style=flat-square)](https://www.npmjs.com/package/@polkadot/primitives)
[![travis](https://img.shields.io/travis/polkadot-js/types.svg?style=flat-square)](https://travis-ci.org/polkadot-js/types)
[![maintainability](https://img.shields.io/codeclimate/maintainability/polkadot-js/types.svg?style=flat-square)](https://codeclimate.com/github/polkadot-js/types/maintainability)
[![coverage](https://img.shields.io/coveralls/polkadot-js/types.svg?style=flat-square)](https://coveralls.io/github/polkadot-js/types?branch=master)
[![dependency](https://david-dm.org/polkadot-js/types.svg?style=flat-square&path=packages/primitives)](https://david-dm.org/polkadot-js/types?path=packages/primitives)
[![devDependency](https://david-dm.org/polkadot-js/types/dev-status.svg?style=flat-square&path=packages/primitives)](https://david-dm.org/polkadot-js/types?path=packages/primitives#info=devDependencies)

# @polkadot/primitives

Base [flow](https://flow.org/) definitions for the base Polkadot types as defined in the [specification](https://github.com/w3f/polkadot-spec). It is useful for implementations, applications and libraries, where type-checking of the JavaScript base types is of importance.

## Usage

Installation -

```
npm install --save @polkadot/primitives
```

Usage -

```js
// @flow

import type { AccountId, Balance } from '@polkadot/primitives/base';

function getBalance (accountId: AccountId): Balance {
 ...
}
```
