import React from "react";
import "./ComponentStyles/Lable_style.css";

export default function Lable(props) {
  return (
    <div>
      <div className="lable">{props.title}</div>
    </div>
  );
}
