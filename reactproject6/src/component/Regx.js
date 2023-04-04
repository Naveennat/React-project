import React from "react";

class Registration extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            user: {}
        }

    }
    handleNameChange(e) {
        this.setState((state, props) => {
            let user = state.user
            user.name = e.target.value;
            
        })
    }
}