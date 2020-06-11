import { makeBars, sortedGreen } from "../Components/TheBox";
import { displayArray } from "../Components/Output";

export async function bubbleSort(array, speed) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      console.log("still looping");
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        if (
          document.getElementById("resetBtn").getAttribute("stopsort") ===
          "true"
        ) {
          return;
        }
        await sleep(speed);
        var l = 0;
        array.forEach((ele) => {
          makeBars(ele, l++);
        });
      }
    }
  }
  displayArray(array);
  sortedGreen(array.length);
}

async function sleep(speed) {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000 - speed * 10);
  });
}
