import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h1 style={{ color: 'green' }}>Array of Objects</h1>
        <h3>Rendering Array of Objects</h3>
  
        <br></br>
       
      </div>
    </div>
  );
}
  
function RenderingArrayOfObjects(){
  const data=[
      {
          "Name":"Shruthi",
          "Marks":"98",
          "Phone":"9876543210"
      },
      {
         "Name":"Shreemathi",
          "Marks":"96",
          "Phone":"9865227823"
      },
      {
          "Name":"Swetha",
          "Marks":"97",
          "Phone":"8765432109"
      },
      {
         "Name":"indhuja",
         "Marks":"⇎",
         "Phone":"7654321098"
      },
      {
         "Name":"Naveen",
        "Marks":"39",
        "Phone":"6543210987"
      },
      {
        "Name":"Venkat",
       "Marks":"78",
       "Phone":"6754321098"
     },
     {
      "Name":"Sonu",
     "Marks":"78",
     "Phone":"9876543201"
   }
  ]
  const tableRows=data.map(
      (element)=>{
          return( 
              
            <tr>
              <td>{element.Name}</td>
              <td>{element.Marks}</td>
              <td>{element.Phone}</td>
            </tr>
              
          )
      }
  )
  return(
      <div>
          
        <Table hover>
            <thead>
              <tr>    
                <th> Name</th>
                <th>Marks</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {tableRows}
            </tbody>
          </Table>      
            
      </div>
  )
}

export default App;
export {RenderingArrayOfObjects};