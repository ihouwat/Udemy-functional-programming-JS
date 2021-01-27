"use strict";
const arr = [3,4,2,5,1,6];

// this method makes arr immutable
Object.freeze(arr); 

const sortArray = function(arr1) {
  // Next line will cause an error due to freeze method on line 5
  return arr1.sort();
};

const newNums = sortArray(arr);

console.log(newNums);
console.log(arr);


