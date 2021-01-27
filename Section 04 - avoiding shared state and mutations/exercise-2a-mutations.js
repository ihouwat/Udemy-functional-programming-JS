// Exercise 2: modify the code so that users is not mutated until storeUser is called

var users = [{name: "James",score: 30,tries: 1}, {name: "Mary", score: 110,tries: 4}, {name: "Henry",score: 80,tries: 3}];

//Modifies Data
var storeUser = function(arr, user) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name.toLowerCase() === user.name.toLowerCase()) {
            arr[i] = user;
            break;
        }
    }
};

//Pure Functions

// cloneObj() IS ONLY ADDITION TO EXERCISE 2 HERE
var cloneObj = function(obj) {
    return JSON.parse(JSON.stringify(obj));
}

var getUser = function(arr, name) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name.toLowerCase() === name.toLowerCase()) {
            return arr[i];
        }
    }
    return null;
};

var updateScore = function(user, newAmt) {
    if (user) {
        user.score += newAmt;
        return user;
    }
};

var updateTries = function(user) {
    if (user) {
        user.tries++;
        return user;
    }
};

// clone the object from the original users array
let usr = cloneObj(getUser(users, "Henry"));
// update the cloned object's score and tries; passing by reference ok here
let usr1 = updateScore(usr, 30);
let usr2 = updateTries(usr1);
// update the original users object
storeUser(users, usr2);




