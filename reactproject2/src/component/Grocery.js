import React from "react";

class Grocery extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: props.itemName

        }
    }
    render(){
        return <span><b>Good {this.props.itemName}</b></span>
    }
}
export default Grocery;