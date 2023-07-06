import React, { useState } from "react";
import JsonDataDisplay from "./json/data.json";
import JsonDataDisplaysecond from "./json/second.json";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ColorToggleButton() {
    const [alignment, setAlignment] = React.useState("web");
    const [checked, setIsChecked] = useState(true);

    const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
    };
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

  const handleWeb = ()=>{
    if (!checked) {
        setIsChecked((checked) => !checked);
  };
}
  const handleAndroid = ()=>{
    if (checked) {
        setIsChecked((checked) => !checked);
  };
};

  return (
    <>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton value="web" onClick={handleWeb}>
          Web
        </ToggleButton>
        <ToggleButton value="android" onClick={handleAndroid}>
          Android
        </ToggleButton>
      </ToggleButtonGroup>
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
    </>
  );
}
