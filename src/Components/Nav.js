import React from "react";
import Dropdown from "./Dropdown";
import Algorithms from "../Algorithms.json";
import AlgorithmsSpeed from "../AlgorithmSpeed.json";
import "./ComponentStyles/Nav_style.css";
export default function Nav() {
  return (
    <div>
      <nav className="nav">
        <div className="nav-wrapper">
          <div className="logo">Al-Viz</div>
          <Dropdown
            title="Select Algorithm"
            listOptions={Algorithms}
            type="string"
            default="Algorithm.."
          />
          <Dropdown
            title="Select Speed"
            listOptions={AlgorithmsSpeed}
            type="number"
            default="Speed.."
          />
        </div>
      </nav>
    </div>
  );
}
