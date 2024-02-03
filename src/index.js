import './index.css';
import React from 'react';
import App from './App/App';
import ReactDOM from 'react-dom/client';
import Constants from './Constans/Constans';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Constants>
        <App />
      </Constants>
    </BrowserRouter>
  </React.StrictMode>
);
