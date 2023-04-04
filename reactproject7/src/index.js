import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginForm from './components/LoginForm';

const myRootElt = ReactDOM.createRoot(document.getElementById('root'));
const rting=(
  <div>
    <h1>React Router Example</h1>
    <BrowserRouter>
    <Routes>
      
      <Route path='/app' element={<App/>} />
      

    </Routes>
    
    </BrowserRouter>
  </div>
);
myRootElt.render(rting);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
