import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CssBaseline from '@mui/material/CssBaseline';
import i18n from './translation/i18n';
import { I18nextProvider } from 'react-i18next';
// import { initializeApp, storage } from "firebase/app";
// import { firebaseConfig } from './services/firebase/config';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const app = initializeApp(firebaseConfig);

root.render(
  <React.StrictMode>
    <CssBaseline />
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
