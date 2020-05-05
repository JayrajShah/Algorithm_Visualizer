import React, { useContext } from "react";
import "./ComponentStyles/Thebox_style.css";
import { infoContext } from "../infoContext";
import { ArrayIntParser } from "../Algorithms/test";

function makeBars(ele, i) {
  console.log(ele);
  var poops = setInterval(function () {
    if (document.getElementById("bar" + i)) {
      clearInterval(poops);
      document.getElementById("bar" + i).style.height =
        (ele * 10).toString() + "%";
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
              className="bar"
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
