import React, { useContext } from "react";
import "./ComponentStyles/Button_style.css";
import { infoContext } from "../infoContext";

export default function Button(props) {
  const [info, setinfo] = useContext(infoContext);

  if (props.title === "Sort") {
    const poops = setInterval(function () {
      if (document.getElementById(props.id)) {
        if (info.name !== "" && info.time !== null && info.array.length > 0) {
          document.getElementById(props.id).disabled = false;
          document.getElementById(props.id).style.backgroundColor = "#4d80ce";
          document.getElementById(props.id).classList.add("btn-hover-shadow");
        } else {
          document.getElementById(props.id).disabled = true;
          document.getElementById(props.id).style.backgroundColor = "#C0C0C0";
          document
            .getElementById(props.id)
            .classList.remove("btn-hover-shadow");
        }
        clearInterval(poops);
      }
    }, 100);
  }

  return (
    <div>
      <button
        id={props.id}
        type="button"
        className="button btn-hover-shadow"
        onClick={props.onClickEvent}
        style={{ backgroundColor: props.color }}
        value={props.value}
        stopsort={props.stopsort}
      >
        {props.title}
      </button>
    </div>
  );
}
