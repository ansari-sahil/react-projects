import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css'

const rootNode = document.getElementById('root')
const reactRoot = ReactDOM.createRoot(rootNode);

reactRoot.render(
  // <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  /* </React.StrictMode> */
);
