// Copyright 2017-2018 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

/**
 * @name u8aFixLength
 * @signature u8aFixLength (value: string, bitLength: number = -1, withPadding: boolean = false): string
 * @summary Shifts a Uint8Array to a specific bitLength
 * @description
 * Returns a uint8Array with the specified number of bits contained in the return value. (If bitLength is -1, length checking is not done). Values with more bits are trimmed to the specified length.
 * @example
 *   import { u8aFixLength } from '@polkadot/util';
 *
 *   u8aFixLength('0x12') // => 0x12
 *   u8aFixLength('0x12', 16) // => 0x0012
 *   u8aFixLength('0x1234', 8) // => 0x12
 */
export default function u8aFixLength (value: Uint8Array, bitLength: number = -1, atStart: boolean = false): Uint8Array {
  const byteLength = Math.ceil(bitLength / 8);

  if (bitLength === -1 || value.length === byteLength) {
    return value;
  }

  if (value.length > byteLength) {
    return value.subarray(0, byteLength);
  }

  const result = new Uint8Array(byteLength);

  if (atStart) {
    result.set(value, 0);
  } else {
    result.set(value, byteLength - value.length);
  }

  return result;
}
