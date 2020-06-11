import React, { useContext } from "react";
import { infoContext } from "../infoContext";
import "./ComponentStyles/ActionBlock_style.css";
import ArrayInput, { clearInput } from "./Input";
import Lable from "./Lable";
import Button from "./Button";
import { Animations } from "../Algorithms/animation";
export default function ActionBlock() {
  const [info, setinfo] = useContext(infoContext);

  const resetState = () => {
    var rbtn = document.getElementById("resetBtn");

    const poops = setInterval(() => {
      if (rbtn) {
        rbtn.setAttribute("stopsort", "true");
        console.log(rbtn.getAttribute("stopsort"));
        clearInterval(poops);
      }
    }, 100);
    setinfo({
      name: "",
      time: null,
      array: [],
      isSorted: false,
    });

    const resetStopSorting = setInterval(() => {
      if (rbtn) {
        rbtn.setAttribute("stopsort", "false");
        console.log(rbtn.getAttribute("stopsort"));
        clearInterval(resetStopSorting);
      }
    }, 1500);
    clearInput();
  };
  return (
    <div>
      <div className="form-wrapper">
        <div className="array-input-block">
          <div className="array-input">
            <Lable title="Enter Array : " />
            <ArrayInput placeholder="Enter ' , ' seperated numbers ( 1 < value < 20 )" />
          </div>
          <Button
            title="Sort"
            color="#4d80ce"
            onClickEvent={() => {
              Animations(info.array, info.time, info.name, [info, setinfo]);
            }}
            value=""
            id="sortBtn"
            stopsort=""
          />
          <Button
            title="Reset"
            color="#ce4d4d "
            onClickEvent={resetState}
            value="reset"
            id="resetBtn"
            stopsort="false"
          />
        </div>
      </div>
    </div>
  );
}
