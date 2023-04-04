import React from "react";
import propTypes from 'prop-types';
class PropValApp extends React.Component {
    render() {
        return (
            <div>
                <h1>ReactJS Props validation example</h1>
                <table>
                    <tr>
                        <th>Type</th>
                        <th>Value</th>
                        <th>Valid</th>
                    </tr>
                    <tr>
                        <th>Array</th>
                        <th>{this.props.propArray}</th>
                        <th>{this.props.propArray ? "true" : "false"}</th>
                    </tr>
                    <tr>
                        <th>Boolean</th>
                        <th>{this.props.propBool}</th>
                        <th>{this.props.propBool ? "true" : "false"}</th>
                    </tr>
                    <tr>
                        <th>Function</th>
                        <th>{this.props.propFunc(5)}</th>
                        <th>{this.props.propFunc(5) ? "true" : "false"}</th>
                    </tr>
                    <tr>
                        <th>String</th>
                        <th>{this.props.propString}</th>
                        <th>{this.props.propString ? "true" : "false"}</th>
                    </tr>
                    <tr>
                        <th>Number</th>
                        <th>{this.props.propNumber}</th>
                        <th>{this.props.propNumber ? "true" : "false"}</th>
                    </tr>
                    <tr>
                        <th>index</th>
                        <th>{this.props.propIndex}</th>
                        <th>{this.props.propIndex ? "true" : "false"}</th>
                    </tr>
                </table>
            </div>
        );
    }
}
PropValApp.propTypes = {
    propArray: propTypes.array.isRequired,
    propBool: propTypes.bool.isRequired,
    propFunc: propTypes.func,
    propNumber: propTypes.number,
    propString: propTypes.string,
    
    
    
}
PropValApp.defaultProps = {
    propArray:  [0,1,2,3,4,5],
    propBool: true,
    propFunc: function (x){return x+5},
    //propFunc:myFun(10),
    propNumber: 1,
    propString: "React JS!!",
    propIndex: "2"
}

export default PropValApp;