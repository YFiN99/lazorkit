import React from "react";
import { useWallet } from "@lazorkit/wallet";

const LoginButton = () => {
  // Berdasarkan SDK ini, kita menggunakan publicKey dan connect
  const { publicKey, connect, disconnecting, connected } = useWallet();

  if (connected && publicKey) {
    return (
      <div style={{ padding: '10px', border: '1px solid #4CAF50', borderRadius: '8px' }}>
        <p>Wallet: {publicKey.toString().slice(0, 6)}...</p>
      </div>
    );
  }

  return (
    <button 
      onClick={connect}
      disabled={disconnecting}
      style={{ padding: '12px 24px', cursor: 'pointer', borderRadius: '8px' }}
    >
      {disconnecting ? "Loading..." : "Login with Passkey"}
    </button>
  );
};

export default LoginButton;