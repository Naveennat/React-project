import React from "react";
import { App1 } from './Trr';
import { App } from './App';

export class Home extends React.Component {
    render() {
        return (
            <form action="/mathC">
            <div>
                <h3>
                    <button type="submit" onClick={'/mathC'}>Mathematical</button> 
                    <button type="submit" onClick={'/Trr'}>Trignometry</button>            
                </h3>
            </div>
            </form>
            
        )
    }
     
}
export class Home1 extends React.Component {
    render() {
        return (
            <form action="/Trr">
            <div>
                <h3>                     
                    <button type="submit" >Trignometry</button>             
                </h3>
            </div>
            </form>
            
        )
    }
     
}


