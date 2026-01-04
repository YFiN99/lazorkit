Tutorial 2: Implementing Gasless Transactions with Lazorkit
This guide explains how to use Lazorkit's Account Abstraction to sponsor transaction fees, allowing your users to interact with Solana without requiring SOL for gas.

1. Initialize the Provider
To enable the smart wallet feature and gas-free transactions, you must wrap your application with LazorkitProvider.

JavaScript

import { LazorkitProvider } from '@lazorkit/wallet';

function Root() {
return (
<LazorkitProvider config={{ network: 'devnet' }}>
<App />
</LazorkitProvider>
);
}
2. Concept
Lazorkit simplifies the complexity of Solana gas fees using Smart Accounts and the Paymaster service. When a transaction is initiated, the SDK routes it through a relayer that pays the SOL fee on behalf of the user.

3. Implementation Code
In your component, use the execute method provided by the wallet hook. The SDK handles sponsorship logic automatically for Smart Accounts.

JavaScript

import { useWallet } from '@lazorkit/wallet';

const GaslessAction = () => { 
const { execute, connected } = useWallet(); 

const handleTransaction = async () => { 
if (!connected) return alert("Please connect wallet first!"); 

try { 
// The transaction is sent without requiring SOL in the user's wallet 
const tx = await execute({ 
instructions: [ 
// Your transaction instructions here 
] 
}); 

console.log("Gasless TX Success! Signature:", tx); 
} catch (err) { 
console.error("Transaction failed:", err); 
} 
}; 

return (
<button onClick={handleTransaction}>
Execute Gasless Transaction
</button>
);
};
4. Key Benefits
No SOL Required: Users can interact with your dApp immediately after generating a Passkey.

Easy Onboarding Process: Eliminates the need for users to purchase SOL from exchanges just to pay network fees.

Automatic Sponsorship: LazorkitProvider handles Payment Treasurer configuration internally, making it easy for developers to implement.