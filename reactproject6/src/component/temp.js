import React from "react";
//import './style.css';
// import PropTypes from "prop-types";

class Degree extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Enter_deg: ''
        };
        this.checkCelsius = this.checkCelsius.bind(this);
        this.conversionChange = this.conversionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    conversionChange(e){
        this.setState({
            Enter_deg: e.target.value
        });

    }
    handleSubmit(e){
        e.preventDefault();
        alert(this.state.Enter_deg);
        var words = this.state.Enter_deg;
        var index = this.state.Enter_deg.indexOf("°C");
        var indexs = this.state.Enter_deg.indexOf("°F");
        if (index <0) {
            var indoor = parseInt(words);
            var Fahrenheit = (((9/5)*indoor)+32);
            alert (indoor)
            console.alert(indoor);
            console.alert(Fahrenheit);
        }
        if (indexs <0) {
            var indoors = parseInt(words);
            var Celsius = ((5/9)*(indoors-32));
            alert(indoors);
            alert(Celsius);
    }
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
                <h2>Degree Conversation: </h2>
                <label htmlFor="degrees">Degree:</label>
                <input type='degrees' name='degrees' onChange={this.conversionChange} value={this.state.Enter_deg}/>
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

export default Degree;