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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const middle = function(array) {
  if (array.length <= 2) {
    return [];
  } 
  if (array.length % 2 === 1) {
    const middleInd = Math.floor(array.length / 2)
    return [array[middleInd]];
  }

    const firstInd = Math.floor((array.length - 1) / 2) 
    const secondInd = Math.floor(array.length / 2)
    return [array[firstInd], array[secondInd]];
      
  
}

assertArraysEqual(middle([1, 2, 3]), [2]);