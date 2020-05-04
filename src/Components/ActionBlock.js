import React, { useContext } from "react";
import { InfoProvider, infoContext } from "../infoContext";
import "./ComponentStyles/ActionBlock_style.css";
import ArrayInput from "./Input";
import Lable from "./Lable";
import Button from "./Button";

export default function ActionBlock() {
  const [info, setinfo] = useContext(infoContext);

  const resetState = () => {
    setinfo({
      name: "",
      time: null,
      array: [],
      isSorted: false,
    });

    console.log(info.name);
    console.log(info.time);
    console.log(info.array);
    console.log(info.isSorted);
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
            onClickEvent={() => console.log("BUTTON PRESSED")}
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
