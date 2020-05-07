import React, { useContext } from "react";
import "./ComponentStyles/Thebox_style.css";
import { infoContext } from "../infoContext";

export function makeBars(ele, i) {
  var poops = setInterval(function () {
    if (document.getElementById("bar" + i)) {
      clearInterval(poops);
      document.getElementById("bar" + i).classList.remove("bar-sorting");
      if (document.getElementById("bar" + i).classList.contains("bar-sorted")) {
        document.getElementById("bar" + i).classList.remove("bar-sorted");
      }
      document.getElementById("bar" + i).classList.add("bar-sorting");

      document.getElementById("bar" + i).style.height =
        (ele * 5).toString() + "%";
    }
  }, 100);
}

export function sortedGreen(bars) {
  var poops = setInterval(() => {
    for (var i = 0; i < bars; i++) {
      if (document.getElementById("bar" + i)) {
        clearInterval(poops);
        document.getElementById("bar" + i).classList.add("bar-sorted");
        document.getElementById("bar" + i).classList.remove("bar-sorting");
      }
    }
  }, 100);
}

function TheBox() {
  var i = 0;
  const [info, setinfo] = useContext(infoContext);
  return (
    <div className="Box-container">
      <div className="thebox">
        {info.array.map((ele) => {
          return (
            <div
              className="bar bar-sorting"
              id={"bar" + i}
              key={i}
              onLoad={makeBars(ele, i++)}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default TheBox;
