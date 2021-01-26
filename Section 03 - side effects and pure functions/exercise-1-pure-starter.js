/* Exercise 1: Turn the following into pure functions

var currentUser = 0,
    users = [{name: "James",score: 30,tries: 1}, {name: "Mary", score: 110,tries: 4}, {name: "Henry",score: 80,tries: 3}];

var updateScore = function(newAmt) {
    users[currentUser].score += newAmt;
};

var returnUsers = function() {
    return users;
};

var updateTries = function() {
    users[currentUser].tries++;
};

var updateUser = function(newUser) {
    currentUser = newUser;
}; */


var currentUser = 0,
    users = [
        {name: "James",score: 30,tries: 1}, 
        {name: "Mary", score: 110,tries: 4}, 
        {name: "Henry",score: 80,tries: 3}
    ];

// update the global 'users' object only here
var makeListChange = function(arr, prop) {
    // destructure array: index of user and the new attribute
    [index, newAttr] = arr;
    // go to the user at the specified index, look at the key (prop input is a string), and update the value
    users[index][prop] = newAttr;
}

// updates a user's score without touching the global 'users' object
// relies on getScore()
var updateScore = function(arr, newAmt) {
    // destructuring array input
    [index, oldScore] = arr;
    // new array to update score
    var updatedUser = [index, oldScore + newAmt];
    // return array
    return updatedUser;
};

// getter for scores
var getScore = function(list, userIndex) {
    var score = 0;
    if(userIndex < list.length) score = list[userIndex].score;
    // return an array of the user's index and current score
    return [userIndex, score];
};

// updates a user's number of tries without touching the global 'users' object
// relies on getScore()
var updateTries = function(arr) {
    [userIndex, tries] = arr;
    newTries = tries+1;
    return [userIndex, newTries];
};

// getter for tries
var getTries = function(list, userIndex) {
    var tries = 0;
    if(userIndex < list.length) tries = list[userIndex].tries;
    // return an array of the user's index and current number of tries
    return [userIndex, tries];
}


// console.log(users)
var changeScore = updateScore(getScore(users, 0), 30); 
makeListChange(changeScore, "score");

// console.log(users)

var changeTries = updateTries(getTries(users, 2));
makeListChange(changeTries, "tries");
// console.log(users);


/*
    Another way with cloning through Object.assign
    Creates a new list
*/

updateScore2 = function(arr, newAmt) {
    let newList = Array.from(users);
    [person, score] = arr;

    for(i = 0; i < newList.length; i++) {
        if(newList[i].name === person) 
            newList[i] = Object.assign({}, newList[i], {score: score + newAmt});
    }

    return newList;
}

getScore2 = function(name) {
    var score = 0;
    users.forEach((user, i) => {
        if(user.name === name) {
            score = user.score;
            tries = user.tries;
        }
    });
    return [name, score];
}

var updatedList = updateScore2(getScore2("Mary"), 3000);
console.log('old list', users)
console.log('new list', updatedList)
