import React from "react";

export default class MainSection extends React.PureComponent{
    render(){
        return(
            <>
            <h1>{this.props.title}</h1>
            <h5>{this.props.subtitle}</h5>
            </>
        );
    }
}