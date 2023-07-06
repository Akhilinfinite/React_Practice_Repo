import React from "react";
import "../App.css";

class Image extends React.PureComponent {
  render() {
    return (
      <>
        <div className="image">
          <img
            src="https://sep.turbifycdn.com/yf/nrp/image/turbify/turbify-logo-v1-white.svg"
            alt="turbify"
          />
        </div>
      </>
    );
  }
}

export default Image;
