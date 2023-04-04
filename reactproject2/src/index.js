import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MyFunction } from './App';
import { Mydemo} from './App';
import Greeting, { reversedNum } from './demo';
import { GreetingParam } from './demo';
import { repeatString } from './demo';
import { palindrome_checker } from './demo';
import Library from './library/Libprop';
import { findlength } from './demo';
import  Mycomponent from './component/Mycomponent';
import ExpenseEntryitem from './component/ExpenseEntryitem';
import Grocery from './component/Grocery';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <MyFunction />
    <Mydemo />     
    
  </React.StrictMode>
 
);
 const rootelt = ReactDOM.createRoot(document.getElementById('root2'));
 const myelt = React.createElement("h3",null,"React JS App-Using element");
 rootelt.render(myelt);

const myelts = <h3> React Js app</h3>;
const rootelts = ReactDOM.createRoot(document.getElementById('root3'));
rootelts.render(myelts);

const greet = ReactDOM.createRoot(document.getElementById('greet'));
const element = Greeting();
greet.render(element);

const param = ReactDOM.createRoot(document.getElementById('param'));
const elemen = GreetingParam("welcome");
param.render(elemen);


const revnum = ReactDOM.createRoot(document.getElementById('rnum'));
const rnum = reversedNum();
revnum.render(rnum);

const str = ReactDOM.createRoot(document.getElementById('repeat'));
const rew = repeatString("Hello World\n", 10);
str.render(rew);

const palindromes = ReactDOM.createRoot(document.getElementById('palindrome'));
palindromes.render(palindrome_checker('madam'));



const sample = ReactDOM.createRoot(document.getElementById('stringlen'));
const strlen = findlength('naveen');
sample.render(strlen);

const comp = ReactDOM.createRoot(document.getElementById('comp'));
comp.render(
  <React.StrictMode>
    <Mycomponent />

  </React.StrictMode>
);

const expcomp = ReactDOM.createRoot(document.getElementById('ExpenseEntryItem'))
expcomp.render(ExpenseEntryitem());


const groceryitem = ReactDOM.createRoot(document.getElementById('groceryitem'))
groceryitem.render(
  <React.StrictMode>
    <Grocery itemName = 'Test'/>
  </React.StrictMode>
)


const libprop = ReactDOM.createRoot(document.getElementById('libp'));
libprop.render(
  <React.StrictMode>
    <Library bookName = 'React Js'
    bookNo = '21G43U7'
    bookAuthor = 'James'
    bookPrice = '299.0'
    bookEdition = '2022'
    ></Library>
  </React.StrictMode>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
