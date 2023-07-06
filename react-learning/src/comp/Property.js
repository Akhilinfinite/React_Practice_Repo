import React, { Component } from "react";

export class Property extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }
  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  decrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }
  multiple() {
    this.setState({
      count: this.state.count * 2,
    });
  }
  divide() {
    this.setState({
      count: this.state.count / 2,
    });
  }

  render() {
    return (
      <>
        <div>count = {this.state.count}</div>
        <div style={{ display: "flex" }}>
        <button style={{ margin: "auto" }} onClick={() => this.increment()}>increment</button>
        </div>
        <div style={{ display: "flex" }}>
        <button style={{ margin: "auto" }} onClick={() => this.decrement()}>decrement</button>
        </div>
        <div style={{ display: "flex" }}>
        <button style={{ margin: "auto" }} onClick={() => this.multiple()}>multiple</button>
        </div>
        <div style={{ display: "flex" }}>
        <button style={{ margin: "auto" }} onClick={() => this.divide()}>divide</button>
        </div>
      </>
    );
  }
}

export default Property;
