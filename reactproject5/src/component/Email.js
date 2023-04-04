import React from "react";
import './Email.css';
class Email extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data1: props.emailId,
            data2: props.emailId.length 
            
        }
    }
    render(){
        const bio = (this.state.data2>5) ? (
            <div className="cor">
                <p><h3>Email_Id is in Correct Format</h3></p>
                <p><h3>{this.state.data1}</h3></p>
            </div>
        ): <div className="wor">
            <p><h3>{this.state.data1}</h3></p> <p><h3>Email_Id is incorrect Format</h3></p>
            <p><h3>Enter Correct Format !!</h3></p>
            
        </div>;
        return(
            <div>
                {bio}
            </div>
        );
    }
}
Email.defaultProps = {
    emailId: "test@gmail.com"
}

export default Email;