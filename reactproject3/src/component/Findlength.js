function Findlength(){
  let text = "Naveen";
  let length = text.length;
  return(
    <div style={
      {
        color: 'red',
        fontSize: '30px',
        letterSpacing: '10px'
      }
    }>lengthofString ({text}): {length}</div>
  ); 
  
  }

export default Findlength;  