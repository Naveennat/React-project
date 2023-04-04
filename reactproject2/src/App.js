import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function MyFunction() {
  var cTime = new Date().toTimeString();
  var cDate = new Date().toDateString();
  var aDate = new Date();
  aDate.setDate(aDate.getDate()+5);
  const fdate = aDate.toDateString();
  
  
  return (
    <div className="date"><p>From App.js:The current time is {cTime} Current date: {cDate}</p>
    <p> 5 Days after : {fdate}     
    </p></div>
    
  );
  
};
function Mydemo(){
  for (let i=1; i<=10; i++)
    return ("hello World");
    
};





export default App;
export {MyFunction};
export {Mydemo};



