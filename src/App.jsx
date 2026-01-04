import React from 'react';
import LoginButton from './components/LoginButton';
import { useWallet } from '@lazorkit/wallet';

function App() {
  // Gunakan try-catch di dalam hook jika memungkinkan
  let walletData = { connected: false };
  try {
    walletData = useWallet();
  } catch (e) {
    console.error("SDK Hook Error:", e);
  }

  const { connected, publicKey } = walletData;

  return (
    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>⚡ Lazorkit Smart dApp</h1>
      <hr style={{ width: '50px', marginBottom: '30px' }} />
      
      {connected ? (
        <div style={{ background: '#f4f4f4', padding: '20px', borderRadius: '10px' }}>
          <p>✅ Wallet Connected</p>
          <code>{publicKey?.toString()}</code>
        </div>
      ) : (
        <div>
          <p>Please login with your Passkey</p>
          <LoginButton />
        </div>
      )}
    </div>
  );
}

export default App;