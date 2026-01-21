/**
 * MainWallet represents a platform's primary Solana wallet for receiving
 * USDC deposits and sending payouts to connected accounts.
 *
 * Each platform account has one MainWallet that holds the keys for
 * blockchain operations.
 *
 * @module MainWallet
 */

/**
 * MainWallet object stored in the database.
 * Contains encrypted secret key - never expose to API responses.
 */
export interface MainWallet {
  /** Unique identifier (e.g., "mw_z12345") */
  id: string;

  /** String representing the object's type. Always "main_wallet" */
  object: 'main_wallet';

  /** The platform account this wallet belongs to */
  account: string;

  /** Blockchain network (currently only 'solana' supported) */
  network: 'solana';

  /** Public key for receiving funds */
  public_key: string;

  /** Encrypted secret key for signing transactions */
  secret_key_encrypted: string;

  /** Unix timestamp when wallet was created */
  created: number;

  /** Unix timestamp when wallet was last updated */
  updated: number;
}

/**
 * Public wallet info returned by API endpoints.
 * Excludes the encrypted secret key.
 */
export interface MainWalletPublic {
  /** Unique identifier */
  id: string;

  /** String representing the object's type. Always "main_wallet" */
  object: 'main_wallet';

  /** The platform account this wallet belongs to */
  account: string;

  /** Blockchain network */
  network: 'solana';

  /** Public key for receiving funds */
  public_key: string;

  /** Unix timestamp when wallet was created */
  created: number;
}
