const eqArrays = require('../assertEqual');

console.log(eqArrays([1, 2, 3], [1, 2, 3,4]), true);
console.log(eqArrays([1, 2, 3], [3, 2, 1]),false);
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true);
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]),false);