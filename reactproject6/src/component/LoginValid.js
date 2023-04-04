import React from "react";

class LoginValid extends React.Component{
    constructor(props) {
        super(props);
        this.state = {submit: false}
        this.togglesubmit = this.togglesubmit.bind(this);        
    }
    togglesubmit(){
        this.setState({submit: this.state.submit});
    }
    render(){
        return (
            <div style={
                {
                    fontSize:'25px',
                    letterSpacing: '2px'
                }
            }>
                <div>
                <label>Name:
                    <input type='text' name='username' username='Naveen'></input>
                </label></div>
                <div>
                <label>Password:
                    <input type='text' name='password' password='N@veen0805'></input>
                </label></div>
                    <div>
                            <p><h4>Welcome!!</h4></p>
                            <button onClick={this.togglesubmit}> Submit </button>
                        </div>
            </div>
        )
        }
}
const Title = (props)=><h1>Welcome:{props.username}</h1>
 
Title.propTypes ={
    password(props,propName,component){
        if(!(propName in props)){
            return new Error('missing')
        }
        if(props[propName].length <5){
            return new Error('too short')
        }
        if ((props[propName]!==("[a-zA-Z0-9_]"))){
            return new Error('Incorrect')
        }
        if(!(props[propName].match(/^.(?=.{8,})(?=.\d)(?=.[a-z]{2,})(?=.[A-Z]{1,})(?=.[@#$%&]{4,}).$/))){
            return new Error('Invalid password')
        }
    }
}

export default LoginValid;