import React from "react";
import image from "./image/Image.png";
import "./ImageContainer.css"



export default class ImageContainer extends React.PureComponent{
    render(){
        return(
            <div>
                <div className="image-container">
                    <img src={image} alt="Image1"/>
                </div>
            </div>
        );
    }
}