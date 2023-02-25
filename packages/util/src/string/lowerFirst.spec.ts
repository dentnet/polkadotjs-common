// Copyright 2017-2023 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

// eslint-disable-next-line spaced-comment
/// <reference types="@polkadot/dev/node/test/node" />

import { perf } from '../test';
import { stringLowerFirst } from '.';

describe('stringLowerFirst', (): void => {
  it("lowers the first letter if it's a capital letter", (): void => {
    expect(
      stringLowerFirst('ABC')
    ).toBe('aBC');
  });

  it("lowers the first letter if it's a capital letter (String)", (): void => {
    expect(
      stringLowerFirst(String('ABC'))
    ).toBe('aBC');
  });

  it("lowers the first letter if it's a lowercase letter", (): void => {
    expect(
      stringLowerFirst('abc')
    ).toBe('abc');
  });

  it('returns undefined as empty', (): void => {
    expect(
      stringLowerFirst()
    ).toBe('');
  });

  it('returns null as empty', (): void => {
    expect(
      stringLowerFirst(null)
    ).toBe('');
  });

  perf('stringLowerFirst', 1_000_000, [['HelloWorldSomething']], stringLowerFirst);
});
