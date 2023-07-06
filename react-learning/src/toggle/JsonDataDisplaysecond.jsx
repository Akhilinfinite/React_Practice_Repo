import React from "react";
import JsonData from "./json/second.json";
function JsonDataDisplaysecond() {
  const DisplayData = JsonData.map((info) => {
    return (
      <tr>
        <td>{info.id}</td>
        <td>{info.name}</td>
        <td>{info.city}</td>
        <td>{info.project}</td>
      </tr>
    );
  });

  return (
    <div>
      <table class="table">
        <title>Infinite</title>
        <thead>
          <tr>
            <th>Sr.NO</th>
            <th>Name</th>
            <th>City</th>
            <th>Project</th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
}

export default JsonDataDisplaysecond;
