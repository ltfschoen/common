// Copyright 2017-2018 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import isInstanceOf from './instanceOf';

/**
 * @name isBuffer
 * @signature isBuffer (value: any): boolean
 * @summary Tests for a `Buffer` object instance.
 * @description
 * Checks to see if the input object is an instance of `Buffer`.
 * @example
 *   import { isBuffer } from '@polkadot/util';
 *
 *   console.log('isBuffer', isBuffer(Buffer.from([]))); // => true
 */
export default function isBuffer (value: any): value is Buffer {
  return isInstanceOf(value, Buffer);
}
