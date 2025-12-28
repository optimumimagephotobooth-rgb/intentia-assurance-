# Hash Policy

## Algorithm

**SHA-256** (Secure Hash Algorithm 256-bit)

This is the only algorithm used for integrity verification.

## What Gets Hashed

**Final PDF only**

The hash is generated from the complete, final PDF assurance pack after all content is assembled and frozen.

## When Hash is Generated

**Post-freeze**

The hash is generated after:
1. Client confirmation received
2. Record frozen
3. Final PDF assembled
4. All content finalised

The hash is never generated before freeze.

## Purpose

**Integrity verification only**

The hash enables independent verification that the PDF has not been modified since generation.

## What the Hash Does Not Claim

- The hash does not claim "immutability"
- The hash does not claim legal enforceability
- The hash does not claim blockchain or distributed ledger properties
- The hash is a technical integrity check, nothing more

## Storage

The hash is:
1. Inserted into the PDF itself (in the Integrity Record section)
2. Stored in the database (if applicable)
3. Provided separately if requested

## Verification

Anyone can verify the hash using standard SHA-256 tools:
- Command line: `sha256sum filename.pdf`
- Online tools (if trusted)
- Programming libraries

If the hash matches, the PDF has not been modified. If it does not match, the PDF has been altered.


