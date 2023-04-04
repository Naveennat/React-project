import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ExpenseEntryItem from './component/ExpenseEntryItem';
import Grocery from './component/Grocery';
import Mycomponent from './component/Mycomponent';
import Findlength from './component/Findlength';
import Library from './librarybook/Library';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const expitem = ReactDOM.createRoot(document.getElementById('expitem'));
expitem.render(
  <React.StrictMode>
    <ExpenseEntryItem />
  </React.StrictMode>
);

const groitem = ReactDOM.createRoot(document.getElementById('groitem'));
groitem.render(
  <React.StrictMode>
    <Grocery itemName = 'Apple' />
  </React.StrictMode>
);

const component = ReactDOM.createRoot(document.getElementById('component'));
component.render(
  <div style={
    {
      color: 'brown',
      fontSize: '25px',
      letterSpacing: '20px'
      
    }
  }>
    <React.StrictMode>
      <Mycomponent />
    </React.StrictMode>
  </div>
);

const length = ReactDOM.createRoot(document.getElementById('length'));
length.render(
  <React.StrictMode>
    <Findlength />
  </React.StrictMode>
);

const libprop = ReactDOM.createRoot(document.getElementById('libp'));
libprop.render(
  <React.StrictMode>
    <Library bookName = 'React Js'
    
    ></Library>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
