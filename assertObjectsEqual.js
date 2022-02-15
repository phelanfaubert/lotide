const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// const eqObjects = function(object1, object2) {
//   const object1Keys = Object.keys(object1);
//     const object2Keys = Object.keys(object2);
//     if (object1Keys.length !== object2Keys.length)
//     return false;
//     if (eqArrays(object1Keys, object2Keys))  {
//     for (const key in object1) {
//       if (object1[key] !== object2[key])
//       return false;
//      }
//     } else {
//       return true;
//     }
//     }
const eqObjects = function(object1, object2) {
 
  let keysArray1 = Object.keys(object1); //Extracting keys from object and creating an array of keys.
  let keysArray2 = Object.keys(object2);//Extracting keys from object and creating an array of keys.
 
  if (keysArray1.length === keysArray2.length) { //Comparing size of the objects
    for (let key of keysArray1) {
    // console.log(`Comparing ${object1[key]} with ${object2[key]}`);
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {    //If the two values are arrays, use the eqArrays function and pass the two arrays as arguments. The eqArrays function returns true if they are equal or false otherwise.
      // console.log("Comparing two arrays");
        return eqArrays(object1[key], object2[key]);
      } else if (!Array.isArray(object1[key]) && !Array.isArray(object2[key])) { //If they are not array, check if BOTH are not arrays.
        if (object1[key] !== object2[key]) { //Comparing values from objects using the keys. Only if they are BOTH NOT ARRAYS.
        // console.log("Comparing two primitive values");
          return false;
        }
      } else { //This means one is an array and the other isn't. They are not equal, return false.
        return false;
      }
 
    }
  } else {
    return false; //Return false if objects do not have the same number of keys. They are obviously different.
  }
 
  return true; //Return true. If the function gets to this point, the objects are equal.
};
 
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};
const ab = { a: "1", b: "2" }; const ba = { b: "2", a: "1"}; 
assertObjectsEqual(ab, ba); // => true

// // console.log(`Example label: ${inspect(actual)}`);

