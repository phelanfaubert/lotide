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

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  // results object created to populate every letter as key & its value as an array of [0] positions
  let currentPosition = 0
  for (const letter of sentence) {

    if (letter !== " ") {
      if (results[letter]) {  //present in results objects
      results[letter].push(currentPosition); 
    } else {
      let newArrayOfPositions = [currentPosition]
      results[letter] = newArrayOfPositions; 
    }
  }
  ++currentPosition
}
return results;
}



//assertArraysEqual(letterPositions("hello").l, [2, 3]);