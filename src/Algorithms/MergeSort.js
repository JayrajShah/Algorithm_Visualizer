import { makeBars, sortedGreen } from "../Components/TheBox";
import { displayArray } from "../Components/Output";

let Array;
let Speed;
export async function mergeSort(array, speed) {
  Array = array;
  Speed = speed;
  await split(0, Array.length - 1);
  displayArray(array);
  sortedGreen(array.length);
}

async function split(low, high) {
  if (low < high) {
    let mid = Math.floor((low + high) / 2);
    await split(low, mid);
    await split(mid + 1, high);
    await sleep(Speed);
    merge(low, mid, high);
  }
}
async function merge(low, mid, high) {
  let i = low;
  let j = mid + 1;
  let k = low;
  let resarray = [];

  while (i <= mid && j <= high) {
    if (Array[i] < Array[j]) {
      resarray[k] = Array[i];
      i++;
      k++;
    } else {
      resarray[k] = Array[j];
      j++;
      k++;
    }
  }
  while (i <= mid) resarray[k++] = Array[i++];
  while (j <= high) resarray[k++] = Array[j++];
  for (let m = low; m <= high; m++) Array[m] = resarray[m];

  var l = 0;
  Array.forEach((ele) => {
    makeBars(ele, l++);
  });
}

async function sleep(speed) {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000 - speed * 10);
  });
}
