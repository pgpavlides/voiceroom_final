import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { LanguageProvider } from './LanguageContext';
import { FontProvider } from './FontContext';

import { useContext } from 'react';
import FontContext from './FontContext';

// const { font } = useContext(FontContext);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
    <FontProvider>
    <App />
    </FontProvider>
    </LanguageProvider>
  </React.StrictMode>,
)
