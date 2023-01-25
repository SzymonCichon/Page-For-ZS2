import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Banner from './Banner';
import Projekty from './Projekty';
import Generate_Sub_Projects from './SubProjekty';
import Baner_Replacement from './BanerReplacement';
import Imput_As_Admin from './Imput_As_Admin';
import reportWebVitals from './reportWebVitals';
import './scripts.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Banner/>
    <Projekty/>
    <Generate_Sub_Projects/>
    <Baner_Replacement/>
    <Imput_As_Admin/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
