import { bubbleSort } from "./BubbleSort";
import { mergeSort } from "./MergeSort";
import { quickSort } from "./QuickSort";
export function Animations(array, speed, name) {
  console.log("in animations");

  switch (name) {
    case "bubblesort":
      bubbleSort(array, speed);
    case "mergesort":
      mergeSort(array, speed);
    case "quicksort":
      quickSort(array, speed);
  }
}

// const poops = setInterval(() => {
//     j = 0;
//     array.forEach((element) => {
//       element += 1;
//       array[j] = element;
//       console.log(element);
//       makeBars(element, j++);
//     });
//     console.log(k);
//     k++;
//     if (k === 5) {
//       clearInterval(poops);
//     }
//   }, 1000);
