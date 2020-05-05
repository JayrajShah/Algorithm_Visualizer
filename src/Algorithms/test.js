import { useContext } from "react";
import { infoContext } from "../infoContext";

export function ArrayIntParser(arr) {
  var newArr = [];
  arr.forEach((ele) => {
    newArr.push(parseInt(ele));
  });
  return newArr;
}

export function A() {
  console.log("A called");
}
