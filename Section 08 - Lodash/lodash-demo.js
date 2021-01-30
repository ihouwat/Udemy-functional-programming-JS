console.log("Begin lodash-demo.js");
let sum = _.add(5,2);
//let sum2 = fp.add(5);
let sum3 = _.add(5); // using auto currying

console.log(sum);

//console.log(sum2(2));

console.log(sum3(2));

// notice that lodash's map method doesn't have to identify an array immediately
// which is not the case for the built-in JS map.
// the functions will be applied to an arary later
const addOne = _.map((num) => num + 1);
const multByThree = _.map((num) => num * 3);
const removeNumsOver100 = _.filter((num) => num <= 100);
const logAndReturn = function(data) {
    console.log(data);
    return data; // return statement in order to continue composing functions
};
const sumAllNumbers = _.reduce((sum, num) => sum + num)(0); // auto-currying is why 0 is invoked later

const processNumbers = _.pipe(//flow and compose is flowRight
    addOne,
    multByThree,
    removeNumsOver100,
    logAndReturn,
    sumAllNumbers,
    console.log);

processNumbers([5, 8, 20, 40]);
console.log("End lodash-demo.js");
console.log("-------------");