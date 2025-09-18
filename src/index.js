import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css'; // Importujeme globální CSS styly
import App from './App'; // Importujeme hlavní komponentu aplikace

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);