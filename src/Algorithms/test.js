export function ArrayIntParser(arr) {
  var newArr = [];
  arr.forEach((ele) => {
    newArr.push(parseInt(ele));
    console.log(parseInt(ele));
  });
  return newArr;
}

export function A() {
  console.log("A called");
}
