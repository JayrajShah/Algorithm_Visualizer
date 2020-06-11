import { bubbleSort } from "./BubbleSort";
import { mergeSort } from "./MergeSort";
import { quickSort } from "./QuickSort";
import { selectionSort } from "./SelectionSort";
export function Animations(array, speed, name, [info, setinfo]) {
  console.log("in animations");

  switch (name) {
    case "bubblesort":
      bubbleSort(array, speed);
      break;
    case "mergesort":
      mergeSort(array, speed);
      break;
    case "quicksort":
      quickSort(array, speed);
      break;
    case "selectionsort":
      selectionSort(array, speed);
      break;
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
