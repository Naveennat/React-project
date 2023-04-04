import './index.css'



function Greeting(){
    return <h1>hello React</h1>
}





function GreetingParam(param){
    return <div className='param'><h1>hello React {param}</h1></div>
}


//let param = "welcome";

function reversedNum(){
    let rev = 0; 
    let num = 123456; 
    let lastDigit;
    while(num !== 0){ 
        lastDigit = num % 10; 
        rev = rev * 10 + lastDigit;
        num = Math.floor(num/10); 
               
     }return (<h1> reversed value: {rev}</h1>);
}


function repeatString(string, times) {
    if (times > 0)
      return string.repeat(times);
    
  }
  


function palindrome_checker(str) {
    const converted_str = str.split('').reverse().join('');
    if (str === converted_str) {
        return  (<h1>{str}: String is Palindrome</h1>);
    } else {
        return (str + " : String is not Palindrome");
    }
}


function findlength(mystring){
    var stringLength = mystring.length();
    return ('Length of string:'+ {stringLength});

}
export default Greeting;
export {GreetingParam};
export {reversedNum};
export {repeatString};
export {palindrome_checker};

export {findlength};
