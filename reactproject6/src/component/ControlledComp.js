import React from 'react';  

class ControlledFormComp extends React.Component {
    constructor(props) {  
        super(props);  
        this.state={
            username : '', password : ''
        };
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
         
    }  
    handleSubmit(e) {
        e.preventDefault();
        alert(this.state.username);
     }
    handleUsernameChange(e) {
        this.setState({
           username : e.target.value
        });
     }
     handlePasswordChange(e) {
        this.setState({
           password : e.target.value
        });
     } 
    render() {  
        return (  
            <form onSubmit={this.handleSubmit}>
                <h2>Sign up-CONTROLLED</h2>               
                <label htmlFor='Username'>Username</label>
                <input type="text" name="username" onChange={this.handleUsernameChange} value={this.state.username} />
                <label htmlFor='Password'>Password</label>
                <input type="password" name="password" onChange={this.handlePasswordChange} value={this.state.password} />
                <button type='submit'>VIEW</button>
            </form> 
             
          );  
     }  
}
export default ControlledFormComp;