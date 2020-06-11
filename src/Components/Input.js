import React, { useContext } from "react";
import "./ComponentStyles/Input_style.css";
import { infoContext } from "../infoContext";
import { ArrayIntParser } from "../Algorithms/test";
import { clearOutput } from "./Output";

export function clearInput() {
  document.getElementById("arrayInput").value = "";
}
export default function Input(props) {
  const [info, setinfo] = useContext(infoContext);

  const inputNumCheck = (e) => {
    var pattern = /[0-9]*,*[0-9]$/i;
    var input = e.target.value;
    if (pattern.test(input)) {
      document.getElementById("message").classList.remove("active");
    } else {
      document.getElementById("message").classList.add("active");
    }
  };
  return (
    <div>
      <div className="input-wrapper">
        <input
          placeholder={props.placeholder}
          className="input"
          onKeyUp={inputNumCheck}
          id="arrayInput"
        />

        <button
          className="enter-btn"
          onClick={(e) => {
            var pattern = /[0-9]*,*[0-9]$/i;
            if (pattern.test(document.getElementById("arrayInput").value)) {
              var split_array = ArrayIntParser(
                document.getElementById("arrayInput").value.split(",")
              );

              setinfo({
                name: info.name,
                time: info.time,
                array: split_array,
                isSorted: info.isSorted,
              });
            }
            clearOutput(info.array);
          }}
        >
          <img
            src={require("../Images/side-arrow.png")}
            className="img"
            alt="->"
          />
        </button>
      </div>
      <div className="num-check">
        <div className="message" id="message">
          Enter numbers only
        </div>
      </div>
    </div>
  );
}
