import React, { Component } from "react";
import JsonData from "./demo.json";
import "./FetchJson.css";

export class FetchJson extends Component {
  render() {
    const DisplayData = JsonData.map((info) => {
      return (
        <tr>
          <td>{info.id}</td>
          <td>{info.name}</td>
          <td>{info.address}</td>
          <td>{info.Email}</td>
          <td>{info.number}</td>
        </tr>
      );
    });
    return (
      <div>
        <div>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>address</th>
                <th>Email</th>
                <th>Mobile Number</th>
              </tr>
            </thead>
            <tbody>{DisplayData}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default FetchJson;
