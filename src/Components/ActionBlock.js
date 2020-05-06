import React, { useContext } from "react";
import { infoContext } from "../infoContext";
import "./ComponentStyles/ActionBlock_style.css";
import ArrayInput from "./Input";
import Lable from "./Lable";
import Button from "./Button";
import { Animations } from "../Algorithms/animation";
export default function ActionBlock() {
  const [info, setinfo] = useContext(infoContext);

  const resetState = () => {
    setinfo({
      name: "",
      time: null,
      array: [],
      isSorted: false,
    });
  };
  return (
    <div>
      <div className="form-wrapper">
        <div className="array-input-block">
          <div className="array-input">
            <Lable title="Enter Array : " />
            <ArrayInput placeholder="Enter ' , ' seperated numbers" />
          </div>
          <Button
            title="Sort"
            color="#4d80ce"
            onClickEvent={() => {
              Animations(info.array, info.time, info.name);
            }}
            value=""
          />
          <Button
            title="Reset"
            color="#ce4d4d "
            onClickEvent={resetState}
            value="reset"
          />
        </div>
      </div>
    </div>
  );
}
