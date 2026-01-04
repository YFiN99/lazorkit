https://lazorkit-nine.vercel.app/
# ⚡ Lazorkit Smart dApp - Solana Bounty

This project is a demonstration of **Account Abstraction** on Solana using **Lazorkit**. It focuses on providing a seamless user experience by eliminating seed phrases and gas fee hurdles.

## 🚀 Live Demo
[INSERT YOUR VERCEL/NETLIFY LINK HERE]

## 🌟 Key Features
- **Passkey Authentication**: Secure login using biometrics (FaceID/TouchID), replacing traditional private keys.
- **Gasless Transactions**: Transactions are sponsored by a Paymaster, allowing users with 0 SOL to interact with the dApp.
- **Smart Account Integration**: Powered by Lazorkit's Smart Wallet infrastructure on Solana Devnet.

## 🛠️ Technical Implementation
To handle the complexities of Web3 libraries in a modern frontend environment, this project implements:
- **Node.js Polyfills**: Integrated `buffer`, `stream`, and `process` for browser compatibility.
- **Stable Mounting Strategy**: Prevents infinite re-render loops common in Web3 SDKs during development.

## 📚 Tutorials
We have provided step-by-step guides to help you understand the integration:
1.  **[Tutorial 1: Passkey Setup](./tutorials/01-passkey.md)** - How to implement biometric login.
2.  **[Tutorial 2: Gasless Transactions](./tutorials/02-gasless.md)** - How to sponsor user fees using the Paymaster.

## 💻 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone [https://github.com/YFiN99/laz.git]

# Install dependencies
npm install

# Run the development server
npm run dev 


🏗️ Built with
Lazorkit - Smart Wallet SDK for Solana.

Fast - Rapid Frontend Development.

React - UI Framework
