import React, { useState } from "react";
import JsonDataDisplay from "./json/data.json";
import JsonDataDisplaysecond from "./json/second.json";
import ReactSwitch from "react-switch";
import "./Table.css";
import ColorToggleButton from "./Colour";

export default function Table() {
  const [checked, setIsChecked] = useState(true);
  const DisplayData = JsonDataDisplay.map((info) => {
    return (
      <tr className="FirstTable">
        <td className="">{info.id}</td>
        <td className="">{info.name}</td>
        <td className="">{info.city}</td>
        <td className="">{info.project}</td>
      </tr>
    );
  });
  const DisplayData1 = JsonDataDisplaysecond.map((info) => {
    return (
      <tr className="SecondTable">
        <td className="">{info.id}</td>
        <td className="">{info.name}</td>
        <td className="">{info.city}</td>
        <td className="">{info.project}</td>
      </tr>
    );
  });
  const handleChange = () => {
    // if (checked) {
    //   setIsChecked((checked) => !checked);
    // } else {
    //   setIsChecked((checked) => !checked);
    // }
    checked ? setIsChecked((checked) => !checked) : setIsChecked((checked) => !checked);
  };

  return (
    <>
      <div>
        <ReactSwitch checked={checked} onChange={handleChange} />
      </div>
      <div className="TableP">
        <table class="table table-striped">
          <thead>
            <tr className="tableH">
              <th>ID</th>
              <th>Name</th>
              <th>city</th>
              <th>project</th>
            </tr>
          </thead>
          {checked && <tbody>{DisplayData}</tbody>}
          {!checked && <tbody>{DisplayData1}</tbody>}
        </table>
      </div>

      <div>
        <ColorToggleButton/>
      </div>
    </>
  );
}
