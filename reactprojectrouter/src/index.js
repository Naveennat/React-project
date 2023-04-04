import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { Contact } from './ContactUs';
import { Caption } from './Caption';
import Palindrome from './Palindrome';
import { Squareroot } from './Squareroot';
import FactOfNum from './factorial';



const myRootElt = ReactDOM.createRoot(document.getElementById('root'));
const rting=(
  <div>
    <h1>React Router Example</h1>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<Contact/>} />
      <Route path='/why' element={<Caption/>} />
      <Route path='/pal' element={<Palindrome/>} />
      <Route path='/sq' element={<Squareroot/>} />
      <Route path='/fac' element={<FactOfNum/>} />

    </Routes>
    
    </BrowserRouter>
  </div>
);
myRootElt.render(rting);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
