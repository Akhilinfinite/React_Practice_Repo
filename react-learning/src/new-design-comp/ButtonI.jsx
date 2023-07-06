import React from "react";
import Button from '@mui/material/Button';
import "./ButtonI.css";

export default class ButtonI extends React.PureComponent {
  render() {
    return (
        <>
        <div>
            <Button className="button">{this.props.Text}</Button>
        </div>
        </>
    );
  }
}