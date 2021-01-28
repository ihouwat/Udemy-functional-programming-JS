// Exercise 6 - function composition
const scores = [50, 6, 100, 0, 10, 75, 8, 60, 90, 80, 0, 30, 110];

// pipe function
const pipe = function(...fns) {
  return function(x) {
      return fns.reduce(function(v, f) {
          return f(v);
      }, x);
  }
};

// compose function
const compose = function(...fns) {
  return function(x) {
      return fns.reduceRight(function(v, f) {
          return f(v);
      }, x);
  }
};

//Convert each statement to a function that can accept and act on any array.
const boostSingleScores = arr => arr.map(val => (val < 10) ? val * 10 : val);

const rmvOverScores =  arr => arr.filter(val => val <= 100);

const rmvZeroScores =  arr => arr.filter(val => val > 0);

const scoresSum =  arr => arr.reduce((sum, val) => sum + val, 0);

const scoresCnt =  arr => arr.reduce((cnt, val) => cnt + 1, 0);


//Compose a function that will remove both zero or lower scores and scores over 100. Test it using the scores array.
const removeScores = pipe(rmvOverScores, rmvZeroScores);
console.log(removeScores(scores));

//Compose a function that will do all the modifications to an array. Test it using the scores array.
const modifyArray = pipe(
  boostSingleScores,
  removeScores,
);
console.log(modifyArray(scores));

//Create a function that will accept an array and return the average. Use the function that sums scores and the function that counts scores or the length property.
const averageScore = arr => scoresSum(arr) / scoresCnt(arr);
console.log(averageScore(scores));

//Compose a function that will do all the modifications on an array and return an average.  
const modifiedArrayAverageScore = pipe (
  modifyArray,
  averageScore
);
console.log(modifiedArrayAverageScore(scores));
