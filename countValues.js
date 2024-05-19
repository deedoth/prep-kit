// add whatever parameters you deem necessary - good luck!
// return arr.filter((item) => (item === n ? item : "")).length;
function countValues(arr, n) {
  let count = 0;
  for (let item of arr) {
    if (item === n) {
      count++;
    }
  }
  return count;
}

console.log(countValues([4, 1, 4, 2, 3, 4, 4], 4));
