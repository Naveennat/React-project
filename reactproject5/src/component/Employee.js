import React from "react";
import './Employee.css';

class  Employee extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                data1: props.empName,
                data2: props.empAge,
                data3: props.empGender
            }
        }

        render() {
            /*const bio = (this.state.data2>58) ? (
                <div>
                    <p><h3>Mr.{this.state.data1} is ready for retiring</h3></p>
                </div>
            ) : <div>
                <p><h3>Mr.{this.state.data1} can continue service</h3></p>
            </div>;
            return (
                <div>
                    {bio}
                </div>
            );
        }*/

        const bio = (this.state.data2>25) ? (
            <div className="emp">
                <p><h3>Invalid Data:Mr.{this.state.data1} is ready for retiring</h3></p>
            </div>
        ): <div>
            <p><h3>Mr.{this.state.data1} can continue Service</h3></p>
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
                <p><h3>Employee Details: </h3></p>
                <p><h3>Name: {this.state.data1}</h3></p>
                <p><h3>Age:{this.state.data2}</h3></p>
                <p><h3>Gender: {this.state.data3}</h3></p>
            </div>
        );
        }
    }

    
 

Employee.defaultProps = {
    empName: 'TestEmployee', empAge: '59', empGender: 'MALE'
}
export default Employee;