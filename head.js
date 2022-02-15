// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
//   }
// };
const assertEqual = require('./assertEqual');

const head = function(arr) {
return arr[0]
}

module.exports = head;

console.log(assertEqual(head([5,6,7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));
