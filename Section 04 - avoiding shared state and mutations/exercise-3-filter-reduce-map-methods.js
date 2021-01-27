
const scores = [50, 6, 100, 0, 10, 75, 8, 60, 90, 80, 0, 30, 110];

//Any scores that are below 10 needs to be multiplied by 10 and the new value included.
const multiplyByTen = scores.map(function(val) {
  return val < 10 ? val * 10 : val;
});
// multiplyByTen --> [ 50, 60, 100, 0, 10, 75, 80, 60, 90, 80, 0, 30, 110 ] 

//Remove any scores that are over 100.
const removeOver100 = multiplyByTen.filter(function(val) {
  return val < 100;
});
// removeOver100 --> [ 50, 60, 0, 10, 75, 80, 60, 90, 80, 0, 30 ] 

//Remove any scores that are 0 or below.
const removeZero = removeOver100.filter(function(val) {
  return val > 0;
});
// removeZero --> [ 50, 60, 10, 75, 80, 60, 90, 80, 30 ] 

//Sum the scores.
const sumOfScores = removeZero.reduce(function(acc, val) {
  return acc + val;
}, 0);
// sumOfScores --> 535

//Provide a count for the number of scores still remaining.
const arrayLength = removeZero.reduce(function(accumulator) {
  return accumulator + 1;
}, 0);
// arrayLength --> 9







