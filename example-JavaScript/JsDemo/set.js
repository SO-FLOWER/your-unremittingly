let set = new Set([1, 2, 3, 4, 5, 6, 7, 7, 7]);
const data = [...set];
const array = Array.from(set);
console.log('array', array);
console.log([...set]);

//set去重

function dedupe(arr) {
  return Array.from(new Set(arr))
}
console.log(dedupe([1, 2, 3, 3, 3]));