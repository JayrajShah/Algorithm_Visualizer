import React, { useContext } from "react";
import "./ComponentStyles/Dropdown_style.css";
import { infoContext } from "../infoContext";

export default function Dropdown(props) {
  const [info, setinfo] = useContext(infoContext);

  if (info.name === "") {
    const times = setInterval(function () {
      if (document.getElementById("dropdown-" + props.type)) {
        document.getElementById("dropdown-" + props.type).selectedIndex = 0;
        clearInterval(times);
      }
    }, 100);
  }

  return (
    <div className="dropdown-wrapper">
      <div
        className="select-wrapper"
        style={{ display: "flex", alignItems: "center" }}
      >
        <label htmlFor="dropdown-Alg">
          <label htmlFor="alg-title" className="title">
            {props.title}
          </label>{" "}
          <select
            id={"dropdown-" + props.type}
            className="dropdown"
            onChange={(e) => {
              var val = e.target.value;
              if (props.type === "string") {
                setinfo({
                  name: val,
                  time: info.time,
                  array: info.array,
                  isSorted: info.isSorted,
                });
              }
              if (props.type === "number") {
                setinfo({
                  name: info.name,
                  time: parseInt(val),
                  array: info.array,
                  isSorted: info.isSorted,
                });
              }
            }}
          >
            <option vlaue="">{props.default}</option>
            {props.listOptions.map((ele) => (
              <option value={ele.name} key={ele.id}>
                {ele.name}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
}
