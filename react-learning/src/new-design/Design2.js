import React from "react";
import MainSection from "../new-design-comp/MainSection";
import ImageText from "../new-design-comp/ImageText";
import "./Design2.css";
import ButtonI from "../new-design-comp/ButtonI";
import icon from "../new-design-comp/image/icon3.png";

export default class Design2 extends React.PureComponent {
  render() {
    return (
      <>
        <div id="example">
          <div className="MainSection">
            <MainSection title="More products and services to boost your business" />
          </div>
          <div className="image-text">
            <div className="right1">
              <div className="image-container">
                <ImageText
                image={<img src={icon} alt="Image" aria-hidden="true" />}
                  title="Private domain registration"
                  subtitle="keep your contact information out of the public eye"
                  btnLink={
                    <ButtonI Text="Get Started"/>
                  }
                />
              </div>
              <div className="image-container">
                <ImageText
                image={<img src={icon} alt="Image" aria-hidden="true" />}
                  title="Domain locking"
                  subtitle="Get added security to prevent the unothorized transfer of your domain"
                  btnLink={
                    <ButtonI Text="Get Started"/>
                  }
                />
              </div>
            </div>
            <div className="right2">
              <div className="image-container">
                <ImageText
                image={<img src={icon} alt="Image" aria-hidden="true" />}
                  title="Domain starter page"
                  subtitle="Get a free web page with your domains plan"
                  btnLink={
                    <ButtonI Text="Get Started"/>
                  }
                />
              </div>

              <div className="image-container">
                <ImageText
                image={<img src={icon} alt="Image" aria-hidden="true" />}
                  title="Domain forwarding"
                  subtitle="Direct your domain to an existing website when you sign up"
                  btnLink={
                    <ButtonI Text="Get Started"/>
                  }
                />
              </div>
            </div>
            <div className="right3">
              <div className="image-container">
                <ImageText
                image={<img src={icon} alt="Image" aria-hidden="true" />}
                  title="DNS management"
                  subtitle="Easily edit your name servers, plus MAX and CNAME records"
                  btnLink={
                    <ButtonI Text="Get Started"/>
                  }
                />
              </div>
              <div className="image-container">
                <ImageText
                image={<img src={icon} alt="Image" aria-hidden="true" />}
                  title="Customer support"
                  subtitle="our world renewned support team is available to help 24/7/365"
                  btnLink={
                    <ButtonI Text="Get Started"/>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
