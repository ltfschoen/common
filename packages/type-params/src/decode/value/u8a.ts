// Copyright 2017-2018 @polkadot/params authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Param$Decoded } from '../../types';

export default function u8a (input: Uint8Array, bitLength: 256 | 512, offset: number): Param$Decoded {
  const length = (bitLength / 8) + offset;

  return {
    length,
    value: input.subarray(offset, length)
  };
}
