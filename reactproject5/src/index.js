import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import  App, {RenderingArrayOfObjects} from './App';
import Shruthi from './shruthi';
import Employee from './component/Employee';
import LikeButton from './component/LikeButton';
import Email from './component/Email';
import ArrayOfStr from './ArrayOfStr';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <RenderingArrayOfObjects />
  </React.StrictMode>
);
const roots = ReactDOM.createRoot(document.getElementById('roots'));
roots.render(
  <React.StrictMode>
    <Shruthi />
    
  </React.StrictMode>
);

const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(
  <React.StrictMode>
    <Employee empName = 'Naveen' empAge = '21' empGender = 'MALE' />
  </React.StrictMode>
)

const root3 = ReactDOM.createRoot(document.getElementById('root3'));
root3.render(
  <React.StrictMode>
    <LikeButton />
  </React.StrictMode>
)

const root4 = ReactDOM.createRoot(document.getElementById('root4'));
root4.render(
  <React.StrictMode>
    <Email />
  </React.StrictMode>
)

const root5 = ReactDOM.createRoot(document.getElementById('root5'));
root5.render(
  <React.StrictMode>
    <ArrayOfStr value={['Apple ','Orange ','Mango ','Grapes ','Strawberry ']}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
