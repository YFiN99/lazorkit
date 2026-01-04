// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Buffer } from 'buffer';

window.Buffer = Buffer;
window.global = window;

// Jalankan TANPA PROVIDER sama sekali untuk tes
ReactDOM.createRoot(document.getElementById('root')).render(<App />);