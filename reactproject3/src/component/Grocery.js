import React from "react";
import './Grocery.css';
class Grocery extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: props.itemName
        }
    }render(){
        return<span><b><div className="hem">Good{this.props.itemName}</div></b></span>
    }

}

export default Grocery;