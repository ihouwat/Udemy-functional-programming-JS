/* increment count WITH side effect

let cnt = 0;

A side effect
cnt is being changed by the function
cnt is outside the scope of the function 
cnt could be used by other functions
because we are chasing cnt, it can cause a side effect
let increment = function() {
  cnt++;
  return cnt;
};
*/


// increment example above WITHOUT side effect

// Has no side effects - a PURE function
//   it doesn't modify a value outside the scope of the function.
//   it returns a value that we can work with
let increment = function(num) {
  return num + 1;
};


// A pure function example
// everything mutated is inside the scope of the function
let average = function(scores) {
  var total; // variable in function scope
  for (let i = 0; i < scores.length; i++) {
    total += scores[i];
  }
  return total/scores.length;
}

average([90,30,40,50,60]); // we never modify the array argument



// Example of side effects messing up an app
/*var MAINAPP = (function(nsp) {
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
    };

    nsp.updateUser = updateUser;
    nsp.updateTries = updateTries;
    nsp.updateScore = updateScore;
    nsp.returnUsers = returnUsers;
    return nsp;
})(MAINAPP || {});

setTimeout(function() {MAINAPP.updateUser(2);}, 300); // expect to affect users[2]
setTimeout(function() {MAINAPP.updateScore(20);}, 100); // gets called before previous line, so changes users[0]
setTimeout(function() {MAINAPP.updateTries();}, 200);*/