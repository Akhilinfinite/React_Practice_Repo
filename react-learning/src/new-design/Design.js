import React from "react";
import ImageContainer from "../new-design-comp/ImageContainer";
import ImageText from "../new-design-comp/ImageText";
import MainSection from "../new-design-comp/MainSection";
import "./Design.css";
import icon from "../new-design-comp/image/icon3.png";

export default class Design extends React.PureComponent {
  render() {
    return (
      <>
        <div id="example1">
          <div className="MainSection">
            <MainSection
              title="Additional benefits with your domain name."
              subtitle="Helping you find the perfect domain is just the beginning With Tubify. you'll have access to whole lot more."
            />
          </div>
          <div className="Body">
            <div className="image-container">
              <ImageContainer />
            </div>
            <div className="image-text">
              <div className="right">
                <ImageText
                  image={<img src={icon} alt="Image" aria-hidden="true" />}
                  title="Private domain registration"
                  subtitle="keep your contact information out of the public eye"
                />
                <ImageText
                  image={<img src={icon} alt="Image" aria-hidden="true" />}
                  title="Domain locking"
                  subtitle="Get added security to prevent the unothorized transfer of your domain"
                />
                <ImageText
                  image={<img src={icon} alt="Image" aria-hidden="true" />}
                  title="Domain starter page"
                  subtitle="Get a free web page with your domains plan"
                />
              </div>
              <div className="left">
                <ImageText
                  image={<img src={icon} alt="Image" aria-hidden="true" />}
                  title="Domain forwarding"
                  subtitle="Direct your domain to an existing website when you sign up"
                />
                <ImageText
                  image={<img src={icon} alt="Image" aria-hidden="true" />}
                  title="DNS management"
                  subtitle="Easily edit your name servers, plus MAX and CNAME records"
                />
                <ImageText
                  image={<img src={icon} alt="Image" aria-hidden="true" />}
                  title="Customer support"
                  subtitle="our world renewned support team is available to help 24/7/365"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
