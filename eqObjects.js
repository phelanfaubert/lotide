const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

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



const eqObjects = function(object1, object2) {
const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  if (object1Keys.length !== object2Keys.length)
  return false;
  if (eqArrays(object1Keys, object2Keys))  {
  for (const key in object1) {
    if (object1[key] !== object2[key])
    return false;
   }
  } else {
    return true;
  }
  }

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); 

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc);

console.log(assertEqual(eqObjects(ab, ba), true))
console.log(assertEqual(eqObjects(abc, ab), false))