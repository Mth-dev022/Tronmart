import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import AppRoutes from './Routes/AppRoutes.jsx';


// Definindo o elemento principal antes de criar o root


// Criando o root e renderizando o aplicativo
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRoutes>
      <App />
    </AppRoutes>
  </React.StrictMode>
);
