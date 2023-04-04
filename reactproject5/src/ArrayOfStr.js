import React from "react";


class  ArrayOfStr extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                data1: props.value
                
            }
        }

        render() {
            
            const bio =
                
             <div>
                <p><h3>{this.state.data1}</h3></p>
            </div>;
            return(
                <div style={
                    {
                        color: 'red',
                        fontSize: '20px',
                        textAlign: 'center',
                        backgroundColor: 'ButtonFace'
                        
    
                    }
                }>
                    <hr></hr>
                    {bio}
                    <hr></hr>
                    
                    
                </div>
            );
            }
    }

    
 

ArrayOfStr.defaultProps = {
    value: ["Item1 ", "Item2 ", "Item3 ", "Item4 ", "Item5 "]
};
export default ArrayOfStr;