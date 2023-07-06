import React, { Component } from 'react'
import "./ImageContainer.css";

export default class ImageContainer extends Component {
  render() {
    return (
      <div>
        {this.props.image}
        <h4>{this.props.title1}</h4>
        <h5>{this.props.title2}</h5>
      </div>
    )
  }
}
