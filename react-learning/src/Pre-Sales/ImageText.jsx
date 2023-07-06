import React from "react";
import "./ImageText.css";

class ImageText extends React.PureComponent {
  render() {
    return (
      <div className="row">
        <div className="ImageText-text col-12 col-md-6 col-lg-6">
          <div className="title1">{this.props.title}</div>
          <div className="subtitle1">{this.props.subtitle}</div>
          <div className="attributions1">{this.props.attributions}</div>
          <div className="btnLink1">{this.props.btnLink}</div>
        </div>
        <div className="ImageText-image  col-12 col-md-6 col-lg-6  pl-4 pr-4">
          <div className="box-shadow">{this.props.box}</div>
          <div className="box">{this.props.box}</div>
          <div className="image-boarder">{this.props.image}</div>
          <div className="title-prop1-shadow">{this.props.Title1}</div>
          <div className="title-prop1">{this.props.Title1}</div>
          <div className="title-prop2-shadow">{this.props.Title2}</div>
          <div className="title-prop2">{this.props.Title2}</div>
          <div className="title-prop3-shadow">{this.props.Title3}</div>
          <div className="title-prop3">{this.props.Title3}</div>
        </div>
      </div>
    );
  }
}

export default ImageText;
