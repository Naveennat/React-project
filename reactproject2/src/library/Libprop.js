import React from "react";

class Library extends React.Component{
    constructor(prop) {
        super(prop);
        this.state = {
            Name: prop.bookName,
            No: prop.bookNo,
            Author: prop.bookAuthor,
            price: prop.bookPrice,
            edition: prop.bookEdition

        }
        
    }
    render(){
        return(
            <div>
                Name: {this.prop.bookName}<br></br>
                No: {this.prop.bookNo}<br></br>
                Author: {this.prop.bookAuthor}<br></br>
                price: {this.prop.bookPrice}<br></br>
                edition: {this.prop.bookEdition}<br></br>
            </div>
        )
    };
}

export default Library;