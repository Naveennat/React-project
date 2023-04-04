import React from "react";
//import './style.css';
//import './external.css';
// import PropTypes from "prop-types";

class FactNum extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Enter_number: ''
        };
        this.checkCelsius = this.checkCelsius.bind(this);
        this.conversionChange = this.conversionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    conversionChange(e){
        this.setState({
            Enter_number: e.target.value
        });

    }
    handleSubmit(e){
        e.preventDefault();
        var number = this.state.Enter_number;
        var range = number - 1;

        if (number < 0) {
        let negative = 'Please Enter positive Number';
        this.setState({final_result: negative});
            return(negative)

        }if (number === 0 || number === 1) {
        let one = 1 ;
        this.setState({final_result: one});
        
           return(one)

        }for (var i = range; i > 1; i--) {
            number = number*i;
        }
            let result = number;
            alert(result)
                
}
    checkCelsius(){
        var words = this.props.propString
        var index = this.props.propString.indexOf("°C")
        for (var number = 0; number < index; number++) {
            var element = words.charAt(number);
        }
        return element
    }
    
    render(){
        return(
            <div id="main-registration-container">
            <div id="register">
            <form onSubmit={this.handleSubmit}>
                <h2>Factorial Conversation: </h2>
                <label htmlFor="fnumber">Factorial Number:</label>
                <input type='number' name='fnumber' onChange={this.conversionChange} value={this.state.Enter_number}/>
                <div align='center'><button className="button" type="submit">Log_in</button></div>
            </form>
            </div>
            </div>
        );
    }
}

// Degree.protoType = {
//     propString: PropTypes.string
// }

// Degree.defaultProps = {
// //     propString: "35°C"
// // }

export default FactNum;