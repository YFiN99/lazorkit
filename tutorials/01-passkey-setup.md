# Tutorial 1: Setting Up Passkey Authentication

This guide will walk you through the implementation of Biometric Authentication (Passkeys) using Lazorkit. Passkeys allow users to create and access their Solana wallets using FaceID, TouchID, or Windows Hello, completely removing the need for seed phrases.

## 1. Why Passkeys?
Traditional Web3 onboarding requires users to write down 12-24 words. Passkeys change this by:
* **Enhanced Security**: Private keys are stored securely on the device's hardware enclave.
* **Frictionless UX**: Users can sign up in seconds, just like unlocking their phone.
* **Multi-device Support**: Securely sync across devices using cloud providers (iCloud/Google Password Manager).

## 2. Implementation with Lazorkit
To implement Passkey login in your dApp, we utilize the `connect` method from the Lazorkit SDK.

### Step 1: Initialize the Wallet Hook
Inside your React component, import the necessary hook:

```javascript
import { useWallet } from '@lazorkit/wallet';

const MyLoginComponent = () => {
  const { connect, connected, publicKey } = useWallet();
  // ...
};

Step 2: Trigger a Password Request
When a user clicks the "Login" button, the browser will automatically trigger a built-in biometric request.

const handleLogin = async () => {
  try {
    // This triggers the device's native authentication (Fingerprint/Face/PIN)
    await connect(); 
    console.log("Wallet created/connected via Passkey!");
  } catch (error) {
    console.error("Authentication failed:", error);
  }
};
3. User Flow
1>.. Request: The dApp requests Passkey creation or login.

2> ..Authentication: The user confirms using their device's biometric scanner.

3> ..Account Address Determination: Lazorkit determines the Smart Account address on the Solana Devnet associated with that specific Passkey.
