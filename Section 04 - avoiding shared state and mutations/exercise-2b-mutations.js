// Exercise 2: modify the code so that users is not mutated until storeUser is called

var users = [{name: "James",score: 30,tries: 1}, {name: "Mary", score: 110,tries: 4}, {name: "Henry",score: 80,tries: 3}];

Object.freeze(users); // we don't want the original object to ever change

var cloneObj = function(obj) {
    return JSON.parse(JSON.stringify(obj));
}

var newScore = function(arr, name, amt) {
    arr.forEach(function(val) {
        if (val.name.toLowerCase() === name.toLowerCase()) {
            val.score = val.score + amt;
        }
    });
    return arr;
};

var newTries = function(arr, name) {
    arr.forEach(function(val) {
        if (val.name.toLowerCase() === name.toLowerCase()) {
            val.tries++;
        }
    });
    return arr;
};


var newArray1 = newScore(cloneObj(users), "James", 30);
var newArray2 = newTries(cloneObj(users), "James");


