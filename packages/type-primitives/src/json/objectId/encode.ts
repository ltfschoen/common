// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { ObjectId } from '../../base';
import { JsonObjectId } from '../types';

import bnEncode from '../bn/encode';

export default function objectIdEncode (value: ObjectId): JsonObjectId {
  return bnEncode(value, 64);
}
