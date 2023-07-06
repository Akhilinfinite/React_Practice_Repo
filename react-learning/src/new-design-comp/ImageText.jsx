import React from "react";
import "./ImageText.css";


export default class ImageText extends React.PureComponent{
    render(){
        return(
            <div className="imageTe">
            <div className="icon">{this.props.image}</div>
            <div className="title"><h3>{this.props.title}</h3></div>
            <div className="subtitle"><h5>{this.props.subtitle}</h5></div>
            <div className="Button">{this.props.btnLink}</div>
            </div>
        );
    }
}