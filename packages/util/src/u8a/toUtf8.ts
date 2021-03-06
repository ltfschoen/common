// Copyright 2017-2018 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import './polyfill/textDecoder';

const decoder = new TextDecoder('utf-8');

/**
 * @name u8aToUtf8
 * @signature u8aToUtf8 (value?: UInt8Array): string
 * @summary Creates a utf-8 string from a Uint8Array object.
 * @description
 * `UInt8Array` input values return the actual decoded utf-8 string. `null` or `undefined` values returns an empty string.
 * @example
 *   import { u8aToUtf8 } from '@polkadot/util';
 *
 *   u8aToUtf8(new Uint8Array([0x68, 0x65, 0x6c, 0x6c, 0x6f])); // hello
 */
export default function u8aToUtf8 (value?: Uint8Array): string {
  if (!value || !value.length) {
    return '';
  }

  return decoder.decode(value);
}
