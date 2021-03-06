// Copyright 2017-2018 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import hexToBn from './toBn';

/**
 * @name hexToNumber
 * @signature hexToNumber (value?: string): number
 * @summary Creates a Number value from a Buffer object.
 * @description
 * `null` inputs returns an NaN result, `hex` values return the actual value as a `Number`.
 * @example
 *   import { hexToNumber } from '@polkadot/util';
 *
 *   hexToNumber('0x1234'); // => 0x1234
 */
export default function hexToNumber (value?: string): number {
  if (!value) {
    return NaN;
  }

  return hexToBn(value).toNumber();
}
