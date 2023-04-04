import React from "react";


class FormComp extends React.Component {
    constructor(props) {
        super(props);
        this.updateSubmit = this.updateSubmit.bind(this);

        this.usernameRef =  React.createRef();
        this.passRef = React.createRef();
    }
    updateSubmit() {
        alert(this.usernameRef.current.value);
    }

    render() {
        return (
            <form onSubmit={this.updateSubmit}>
                <h2>Sign up</h2>
                <label htmlFor="username">Username</label>
                <input type='text' name="username" ref={this.usernameRef} />
                <label htmlFor="password">password</label>
                <input type='password' name="password" ref={this.passRef} />
                <button type="submit" >Sign up</button>

            </form>

        );
    }
}

export default FormComp;