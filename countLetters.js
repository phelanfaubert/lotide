const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let results = {};
  for (const element of string) {
    if (element !== " ") {
      if (results[element]) { 
      results[element] += 1;
    } else {
      results[element] = 1;
    }
  }
}
return results;
}

console.log(countLetters("Lighthouse in the house"))