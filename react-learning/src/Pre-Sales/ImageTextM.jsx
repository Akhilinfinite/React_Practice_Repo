import React from "react";
import ImageText from "./ImageText";
import "./ImgeTextM.css";
import image from "./image/Image.png";

class ImageTextM extends React.PureComponent {
  render() {
    return (
      <div className="FeaturesSection">
        <ImageText
          image={
            <img
              src={image}
              alt="Image"
              aria-hidden="true"
            />
          }
          Title1={"Monitor Customer Sentiment"}
          Title2={"Competitive Intelligence"}
          Title3={"70+ Digital Directories"}
        />
      </div>
    );
  }
}

export default ImageTextM;
