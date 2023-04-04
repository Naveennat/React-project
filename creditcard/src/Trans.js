import React, { useState } from 'react';
import './App.css'
  
function StudentForm(props) {
  const [date, setDate] = useState('');
  const [Transaction, setTransaction] = useState('');
  const [Balance, setBalance] = useState('');
  
  const changeDate = (event) => {
    setDate(event.target.value);
  };
  
  const changeTrans = (event) => {
    setTransaction(event.target.value);
  };
  const changeBalance = (event) => {
    setBalance(event.target.value);
  };
  
  const transferValue = (event) => {
    event.preventDefault();
    const val = {
      date,
      Transaction,
      Balance
    };
    props.func(val);
    clearState();
  };
  
  const clearState = () => {
    setDate('');
    setTransaction('');
    setBalance('');
  };
  
  return (
    <div className='App-header'>
        <div>
      <label>Date : </label>
      <input type="text" value={date} onChange={changeDate} />
      </div>
      <div>
      <label>Transaction :</label>
      <input type="text" value={Transaction} onChange={changeTrans} />
      </div>
      <div>
      <label>Balance : </label>
      <input type="text" value={Balance} onChange={changeBalance} />
      </div>
      <div>
      <button onClick={transferValue}> Add</button>
      </div>
    </div>
  );
}
  
export default StudentForm;