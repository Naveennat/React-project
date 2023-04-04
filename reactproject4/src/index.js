import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Library from './component/Library';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const roots = ReactDOM.createRoot(document.getElementById('roots'));
roots.render(
  <React.StrictMode>
    <Library bookName = 'The Secret Enemy' bookNo = '123ASD' bookAuthor = 'AGATHA CHRISTAE' bookPrice = '450' bookEdition = 'SECOND EDITION'/>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
