import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ModalContextProvider from './context/modalContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter >
  <ModalContextProvider >
 
    <App />
</ModalContextProvider>
</BrowserRouter>
);