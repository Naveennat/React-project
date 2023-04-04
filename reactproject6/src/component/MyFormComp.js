import React from "react";

class MyFormComp extends React.Component{
    render(){
        return <Title text='TESTing'/>
    }
}
const Title = (props)=><h1>Title:{props.text}</h1>
 
Title.propTypes ={
    text(props,propName,component){
        if(!(propName in props)){
            return new Error('missing')
        }
        if(props[propName].length <5){
            return new Error('too short')
        }
    }
}

export default MyFormComp;