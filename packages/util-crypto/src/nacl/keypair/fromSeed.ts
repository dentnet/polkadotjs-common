// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Keypair } from '../../types';

import nacl from 'tweetnacl';
import { isReady, keypairFromSeed } from '@polkadot/wasm-dalek-ed25519';

/**
 * @name naclKeypairFromSeed
 * @summary Creates a new public/secret keypair from a seed.
 * @description
 * Returns a object containing a `publicKey` & `secretKey` generated from the supplied seed.
 * @example
 * <BR>
 *
 * ```javascript
 * import { naclKeypairFromSeed } from '@polkadot/util-crypto';
 *
 * naclKeypairFromSeed(...); // => { secretKey: [...], publicKey: [...] }
 * ```
 */
export default function naclKeypairFromSeed (seed: Uint8Array): Keypair {
  if (isReady()) {
    const full = keypairFromSeed(seed);

    return {
      publicKey: full.slice(32),
      secretKey: full.slice(0, 64)
    };
  }

  return nacl.sign.keyPair.fromSeed(seed);
}
