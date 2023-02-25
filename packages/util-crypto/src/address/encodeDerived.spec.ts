// Copyright 2017-2023 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

// eslint-disable-next-line spaced-comment
/// <reference types="@polkadot/dev/node/test/node" />

import { encodeDerivedAddress } from '.';

describe('encodeDerivedAddress', (): void => {
  it('creates a valid known derived address', (): void => {
    expect(
      encodeDerivedAddress('5GvUh7fGKsdBEh5XpypkfkGuf7j3vXLxH9BdxjxnJNVXRYi1', 0)
    ).toEqual('5E5XxqPxm7QbEs6twYfp3tyjXidn4kqRrNPH4o6JK9JSLUeD');
  });
});
