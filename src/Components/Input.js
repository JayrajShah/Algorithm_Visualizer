import React, { useContext } from "react";
import "./ComponentStyles/Input_style.css";
import { infoContext } from "../infoContext";

export default function Input(props) {
  const [info, setinfo] = useContext(infoContext);

  const inputNumCheck = (e) => {
    var pattern = /[0-9]*,*[0-9]$/i;
    var input = e.target.value;
    if (pattern.test(input)) {
      document.getElementById("message").classList.remove("active");
    } else {
      document.getElementById("message").classList.add("active");
    }
  };
  return (
    <div>
      <input
        placeholder={props.placeholder}
        className="input"
        onKeyUp={inputNumCheck}
        id="arrayInput"
        onBlur={(e) => {
          e.preventDefault();
          var pattern = /[0-9]*,*[0-9]$/i;
          if (pattern.test(e.target.value)) {
            var split_array = e.target.value.split(",");
            setinfo({
              name: info.name,
              time: info.time,
              array: split_array,
              isSorted: info.isSorted,
            });
            console.log(info.array);
            e.target.value = "";
          }
        }}
      />
      <div className="num-check">
        <div className="message" id="message">
          Enter numbers only
        </div>
      </div>
    </div>
  );
}
