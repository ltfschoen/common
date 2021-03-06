// Copyright 2017-2018 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import isFunction from '../is/function';

import { u8aFromBuffer } from './index';

describe('u8aFromBuffer', () => {
  it('exists as a function', () => {
    expect(
      isFunction(u8aFromBuffer)
    ).toEqual(true);
  });
});
