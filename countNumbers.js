// add whatever parameters you deem necessary - good luck!
// const countNumbers = (arr) => arr.filter((n) => (Number(n) ? parseInt(n) : "")).length;
function countNumbers(array) {
  let count = [];
  for (let item of array) {
    if (Number(item)) {
      count.push(item)
    }
  }
  return count.length;
}

console.log(countNumbers(["a", "b", "3", "awesome", "4"]));
console.log(countNumbers(["a", "3js", "4", "yes"]));
