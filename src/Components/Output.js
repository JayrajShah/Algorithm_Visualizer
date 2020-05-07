import React, { useContext } from "react";
import "./ComponentStyles/Output_style.css";

import { infoContext } from "../infoContext";

export default function Output() {
  const [info, setinfo] = useContext(infoContext);

  if (info.array.length === 0) {
    const poops = setInterval(() => {
      if (document.getElementById("output")) {
        document.getElementById("output").innerText = "";
        clearInterval(poops);
      }
    }, 10);
  }
  return (
    <div>
      <div className="output-container">
        <div className="output" id="output"></div>
      </div>
    </div>
  );
}

export function displayArray(array) {
  const poops = setInterval(() => {
    if (document.getElementById("output")) {
      document.getElementById("output").innerText =
        "Sorted Array :  [" + array + "]";
      clearInterval(poops);
    }
  }, 100);
}

export function clearOutput(arr) {
  if (arr.length !== 0) {
    console.log("abt to clear op");
    const poops = setInterval(() => {
      if (document.getElementById("output")) {
        document.getElementById("output").innerText = "";
        clearInterval(poops);
      }
    }, 100);
  }
}
