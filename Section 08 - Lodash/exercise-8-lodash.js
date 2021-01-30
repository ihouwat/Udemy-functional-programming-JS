// Exercise 8: using Lodash
console.log("Begin exercise-8-lodash.js");

//Convert each statement to a function that can accept and act on any array.
const scores = [50, 6, 100, 0, 10, 75, 8, 60, 90, 80, 0, 30, 110];

// const boostSingleScores = scores.map(val => (val < 10) ? val * 10 : val);
const boostSingleScores = _.map(val => (val < 10) ? val * 10 : val);

// const rmvOverScores = boostSingleScores.filter(val => val <= 100);
const rmvOverScores = _.filter(val => val <= 100);

// const rmvZeroScores = rmvOverScores.filter(val => val > 0);
const rmvZeroScores = _.filter(val => val > 0);


//Compose a function that will remove both zero or lower scores and scores over 100. Test it using the scores array.
const rmvBothZeroAndOver100 = _.pipe(
  rmvOverScores,
  rmvZeroScores
)
console.log("rmvBothZeroAndOver100(): ")
console.log(rmvBothZeroAndOver100(scores));

//Compose a function that will do all the modifications to an array. Test it using the scores array.
const processScores = _.pipe(
  boostSingleScores,
  rmvBothZeroAndOver100
);
console.log("processScores(): ")
console.log(processScores(scores));

//Create a function that will accept an array and return the average.
// _.curry method returns a function that accepts remaining func arguments if arity length has not been reached
const getAverage = _.curry(_.mean); 
console.log("getAverage(): ")
console.log(getAverage(scores));

//Compose a function that will do all the modifications on an array and return an average.  
const processAndComputeAvg = _.pipe(
  processScores,
  getAverage
)
console.log("processAndComputeAvg(): ")
console.log(processAndComputeAvg(scores));


console.log("End exercise-8-lodash.js");
console.log("-------------");