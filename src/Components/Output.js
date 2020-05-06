import React from "react";
import "./ComponentStyles/Output_style.css";

export default function Output() {
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
