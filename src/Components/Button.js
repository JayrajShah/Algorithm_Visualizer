import React, { useContext } from "react";
import "./ComponentStyles/Button_style.css";
import { infoContext } from "../infoContext";

export default function Button(props) {
  const [info, setinfo] = useContext(infoContext);

  if (props.title === "Sort") {
    const poops = setInterval(function () {
      if (document.getElementById("btn")) {
        if (info.name !== "" && info.time !== null && info.array.length > 0) {
          document.getElementById("btn").disabled = false;
          document.getElementById("btn").style.backgroundColor = "#4d80ce";
          document.getElementById("btn").classList.add("btn-hover-shadow");
        } else {
          document.getElementById("btn").disabled = true;
          document.getElementById("btn").style.backgroundColor = "#C0C0C0";
          document.getElementById("btn").classList.remove("btn-hover-shadow");
        }
        clearInterval(poops);
      }
    }, 100);
  }

  return (
    <div>
      <button
        id="btn"
        type="button"
        className="button btn-hover-shadow"
        onClick={props.onClickEvent}
        style={{ backgroundColor: props.color }}
        value={props.value}
      >
        {props.title}
      </button>
    </div>
  );
}
