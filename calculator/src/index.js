import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import { App } from './App';
import { Home } from './Home';
import { App1 } from './Trr';


const myRootElt = ReactDOM.createRoot(document.getElementById('root'));
const rting=(
  <div>
    <h1></h1>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/mathC' element={<App/>} />
      <Route path='/Trr' element={<App1/>} />
      
    </Routes>
    
    </BrowserRouter>
    
  </div>
);
myRootElt.render(rting);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
