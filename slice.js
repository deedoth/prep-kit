// add whatever parameters you deem necessary - good luck!
function slice(arr, a, b) {
  let count = [];
  if (b > arr.length || b === undefined) {
    b = arr.length;
  }
  for (let i = a; i < b; i++) {
    count.push(arr[i]);
  }
  return count;
}

console.log(slice([1, 2, 3, 4, 5], 0, 3));
console.log(slice([1, 2, 3, 4, 5], 2, 4));
console.log(slice([1, 2, 3, 4, 5], 2));
console.log(slice([1, 2, 3, 4, 5], 2, 10));
