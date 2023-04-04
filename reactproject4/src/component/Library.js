import React from "react";

class Library extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            Name: props.bookName,
            No: props.bookNo,
            Author: props.bookAuthor,
            price: props.bookPrice,
            edition: props.bookEdition

        }
        
    }
    render(){
        return(
            <div style={
                {
                    color:'blue',
                    fontSize: '30px',
                    letterSpacing: '15px'
                }
            }>
                Name: {this.props.bookName}<br></br>
                No: {this.props.bookNo}<br></br>
                Author: {this.props.bookAuthor}<br></br>
                price: {this.props.bookPrice}<br></br>
                edition: {this.props.bookEdition}<br></br>
            </div>
        )
    }
}

export default Library;