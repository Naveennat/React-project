import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import EmployeeArray from './EmployeeArray';
import PropValApp from './component/PropValApp';
import MyFormComp from './component/MyFormComp';
import LoginValid from './component/LoginValid';
import FactNum from './component/FactNum';
import Form from './component/Lvform';
import FormComp from './component/FormComp';
import ControlledFormComp from './component/ControlledComp';
import { ListProc } from './component/arrOfNumber';
import NumberList from './component/arrOfNumber';
import UserRegistration from './component/Registration';
import Degree from './component/temp';
import { NumberList1 }from './component/arrOfNumber';
import { Arrstring } from './component/arrOfNumber';
import { ArrayOfStr } from './component/arrOfNumber';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Form />
    <EmployeeArray />
  </React.StrictMode>
);
const example = ReactDOM.createRoot(document.getElementById('example'));
example.render(
  <React.StrictMode>
    <PropValApp />
  </React.StrictMode>
);
const examples = ReactDOM.createRoot(document.getElementById('examples'));
examples.render(
  <React.StrictMode>
    <PropValApp propArray={['A','B','C','D']} propBool = {false}  />
  </React.StrictMode>
);
const example2 = ReactDOM.createRoot(document.getElementById('example2'));
example2.render(
  <React.StrictMode>
    <MyFormComp  />
  </React.StrictMode>
);
const login = ReactDOM.createRoot(document.getElementById('login'));
login.render(
  <React.StrictMode>
    <LoginValid  />
  </React.StrictMode>
);
const Fact = ReactDOM.createRoot(document.getElementById('Fact'));
Fact.render(
  <React.StrictMode>
    <FactNum  />
    <UserRegistration />
    
  </React.StrictMode>
);
const Forms = ReactDOM.createRoot(document.getElementById('Form'));
Forms.render(
  <React.StrictMode>
    <FormComp  />
    <ControlledFormComp />
    <NumberList  numbers = {[1,2,3,4,5]}/>
    <NumberList1  numbers = {[1,2,3,4,5]}/>
    
    <ListProc />
    <Degree />
    <ArrayOfStr />
  </React.StrictMode>
);

const Ass1 = ReactDOM.createRoot(document.getElementById('Ass1'));
Ass1.render(
  <React.StrictMode>
    <Arrstring listarr = {[1,2,3,4,5,6]} />
    
    
  </React.StrictMode>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
