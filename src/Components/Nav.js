import React from "react";
import DropdownAlg from "./DropdownAlg";
import DropdownSpeed from "./DropdownSpeed";
import Algorithms from "../Algorithms.json";
import AlgorithmsSpeed from "../AlgorithmSpeed.json";
import "./ComponentStyles/Nav_style.css";
export default function Nav() {
  return (
    <div>
      <nav className="nav">
        <div className="nav-wrapper">
          <div className="logo">Al-Viz</div>
          <DropdownAlg
            title="Select Algorithm"
            listOptions={Algorithms}
            type="string"
            default="Algorithm.."
          />
          <DropdownSpeed
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
