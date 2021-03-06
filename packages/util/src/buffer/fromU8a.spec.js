// Copyright 2017-2018 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import isFunction from '../is/function';

import { bufferFromU8a } from './index';

describe('bufferFromU8a', () => {
  it('exists as a function', () => {
    expect(
      isFunction(bufferFromU8a)
    ).toEqual(true);
  });
});
