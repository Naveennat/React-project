import React, { useState } from 'react';



function App1() {
    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");
    const [trg, setTrg] = useState("");
       

    
    const ops = ['/', '*', '+', '-', '.','sin','cos','tan'];

    const updateCalc = value => {
      if (
        ops.includes(value) && calc === '' || 
        ops.includes(value) && ops.includes(calc.slice(-1)
        )
         ) {
          return;
      }
      
      setCalc(calc + value);

      if (!ops.includes(value)) {
        setResult(eval(calc + value).toString());
      }
      

    }

    const createDigits = () => {
      const digits = [];

      for (let i = 1; i < 10; i++){
        digits.push(
          <button onClick={() => updateCalc(i.toString())} key=
          {i}>{i}
          </button>
        )
      }

      return digits;

      
    }

    const calculate = () => {
      setCalc(eval(calc).toString());

    }

    const deleteLast = () => {
      if(calc === '') {
        return;

      }
      const value = calc.slice(0, -1);
      setCalc(value);
    }

    const tron = () => {
      var trg = Math.sin(calc)
      setCalc(eval(trg).toString());
    }
    const tron1 = () => {
      var trg = Math.cos(calc)
      setCalc(eval(trg).toString());
    } 
    const tron2 = () => {
      var trg = Math.tan(calc)
      setCalc(eval(trg).toString());
    }   

    
      return (
          <div className="App">
            <div className="calculator">
              <div className="display">
                {result ? <span>({result})</span> : '' }&nbsp;
                { calc || "0" }
              </div>

              <div className="operators">
                
                <button onClick={tron}>sin</button>
                <button onClick={tron1}>cos</button>
                <button onClick={tron2}>tan</button>

                <button onClick={deleteLast}>DEL</button>
              </div>

              <div className="digits">
                { createDigits() }
                <button onClick={() => updateCalc('0')}>0</button>
                <button onClick={() => updateCalc('.')}>.</button>
                <button onClick={calculate}>=</button>
              </div>
            </div>
          </div>
        );
}


export  {App1};