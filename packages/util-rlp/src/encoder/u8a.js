// Copyright 2017-2018 @polkadot/util-rlp authors & contributors
// This software may be modified and distributed under the terms
// of the MPL-2.0 license. See the LICENSE file for details.
// @flow

import type { EncodeFunc } from './types';

import u8aConcat from '@polkadot/util/u8a/concat';

import encodeLength from './length';

export default function encodeU8a (encoder: EncodeFunc, input: Uint8Array): Uint8Array {
  if (input.length === 1 && input[0] < 128) {
    return input;
  }

  return u8aConcat(
    encodeLength(input.length, 128),
    input
  );
}
