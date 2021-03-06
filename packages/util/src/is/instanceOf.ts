// Copyright 2017-2018 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

/**
 * @name isInstanceOf
 * @signature isInstanceOf (value: any, clazz: Class<any>): boolean
 * @summary Tests for a instance of a class.
 * @description
 * Checks to see if the input value is an instance of the test class.
 * @example
 *   import { isInstanceOf } from '@polkadot/util';
 *
 *   console.log('isInstanceOf', isInstanceOf(new Array(0), Array)); // => true
 */
export default function isInstanceOf (value: any, clazz: any): boolean {
  return value instanceof clazz;
}
