import { makeBars, sortedGreen } from "../Components/TheBox";
import { displayArray } from "../Components/Output";

export async function selectionSort(array, speed) {
  for (let i = 0; i < array.length - 1; i++) {
    let min_idx = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min_idx]) min_idx = j;
    }
    console.log("still looping");
    let temp = array[min_idx];
    array[min_idx] = array[i];
    array[i] = temp;
    if (
      document.getElementById("resetBtn").getAttribute("stopsort") === "true"
    ) {
      return;
    }
    await sleep(speed / 2);
    var l = 0;
    array.forEach((ele) => {
      makeBars(ele, l++);
    });
  }

  displayArray(array);
  sortedGreen(array.length);
}

async function sleep(speed) {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000 - speed * 20);
  });
}
