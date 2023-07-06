import React, { Component } from "react";
import "./DomainCost.css";
import logo from "../logo.svg";
import ImageContainer from "./ImageContainer";

export default class DomainCost extends Component {
  render() {
    return (
      <div className="main">
        <div class="top">
          <h2>
            With more than 300+ domain extensions, you will discover the one
            that's just right.
          </h2>
        </div>
        <div class="bottom">
          <div class="container1">
            <img src={logo} alt="logo" height="40px" width="40px" />
            <h4>$10.99/year*</h4>
            <h5>$24.90</h5>
          </div>
          <div class="container1">
            <img src={logo} alt="logo" height="40px" width="40px" />
            <h4>$10.99/year*</h4>
            <h5>$24.90</h5>
          </div>
          <div class="container1">
            <div class="div1">
              <img src={logo} alt="logo" height="40px" width="40px" />
              <h4>$10.99/year*</h4>
              <h5>$24.90</h5>
            </div>
            <div class="sale">Sale</div>
          </div>
          <div class="container1">
            <img src={logo} alt="logo" height="40px" width="40px" />
            <h4>$10.99/year*</h4>
            <h5>$24.90</h5>
          </div>
          <div class="container1">
            <img src={logo} alt="logo" height="40px" width="40px" />
            <h4>$10.99/year*</h4>
            <h5>$24.90</h5>
          </div>
          <div class="container1">
            <img src={logo} alt="logo" height="40px" width="40px" />
            <h4>$10.99/year*</h4>
            <h5>$24.90</h5>
          </div>
          <div class="container1">
            <img src={logo} alt="logo" height="40px" width="40px" />
            <h4>$10.99/year*</h4>
            <h5>$24.90</h5>
          </div>
          <div class="container1">
            <ImageContainer image={<img src={logo} alt="logo" height="40px" width="40px" />} title1="$10.99/year*" title2="$24.90" />
          </div>
        </div>
      </div>
    );
  }
}
