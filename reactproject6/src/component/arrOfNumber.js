function ListProc() {
    const myArray = ['ONE', 'TWO', 'THREE', 'Four', 'FIVE'];   
    const listItems = myArray.map((numeral)=>{   
      return <li>{numeral}</li>;   
  });
  return (  
    <div>  
        <h2>Rendering Lists inside component</h2>  
              <ul>{listItems}</ul>  
    </div>  
  ); 
   
  }
   
  function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      <li>{number*5}</li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }
  function ListItemMethod(props) {
     // Correct! there is no need to specify the key here:
     return <li><i>{props.value}</i></li>
  }

  function NumberListMethod(props) {
    const names = props.nameList;
    const listItems = names.map((name) =>
     // Corrext! key should be specified inside the array.
      <ListItemMethod key={name.toString()} value={name} />
    );
    
    return (
      <ol>{listItems}</ol>
    );
  }

  function NumberList1(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
     
     <li>{(number%2==0) ? number : ''}</li>     
      
    );
    return (
      
      <ol>{listItems}</ol>
    );
  }

  function Arrstring (props) {
    const array = props.array;
    const listarr = JSON.stringify(array);
    console.log({listarr});
    
  }
  

const sampleJSON = {
  "arrOfNumbers": [1, 2, 3, 4],
  "arrOfStrings": ["a", "b", "c", "d"]
}

function ArrayOfStr() {
  return (
    <div>
      <h1>Array Of String</h1>
      <h2>{sampleJSON.arrOfNumbers}
      {sampleJSON.arrOfStrings}</h2>
    </div>
  )
}

export  {ArrayOfStr};

  

export default NumberList;
export {ListProc};  
export {ListItemMethod};
export {NumberListMethod};
export {NumberList1};
export {Arrstring};