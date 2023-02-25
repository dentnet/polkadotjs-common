// Copyright 2017-2023 @polkadot/x-randomvalues authors & contributors
// SPDX-License-Identifier: Apache-2.0

// eslint-disable-next-line spaced-comment
/// <reference types="@polkadot/dev/node/test/node" />

import { insecureRandomValues } from './fallback';

describe('fallback (insecure)', (): void => {
  it('subsequent results does not match', (): void => {
    expect(
      insecureRandomValues(new Uint8Array(32)).toString()
    ).not.toEqual(
      insecureRandomValues(new Uint8Array(32)).toString()
    );
  });

  it('generates with the supplied length', (): void => {
    expect(
      insecureRandomValues(new Uint8Array(128))
    ).toHaveLength(128);
  });
});
