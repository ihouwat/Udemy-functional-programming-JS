/*
Exercise 9:
Refactor the code to use the Ramda library. There are multiple places that could be modify to use Ramda.
*/
console.log("Begin exercise-9-ramda.js");

const users = [{name: "James",score: 30,tries: 1}, {name: "Mary", score: 110,tries: 4}, {name: "Henry",score: 80,tries: 3}];

// Utility functions

const storeUser = (arr, user) => {
    // Find index of user in list
    let index = R.findIndex(R.propEq('name', user.name))(arr);
    // Update the user at the specified index and retun the users array
    return R.update(index, user, arr);
};

// Accepts an array of user objects and a string
// looks for an object where user.name equals the string argfument
// returns a cloned user object if found or null if no user is found
const findUser = (arr, name) => R.clone(R.find(R.propEq('name', name))(arr)) || null;

// Curry function to get a user from the 'users' array. Function call expects a string Ex: curriedGetUser("Henry");
const getUser = R.curry(findUser)(users);

const updateScore = (user, newAmt)  => {
    if (user) {
        let clonedUser = R.clone(user);
        clonedUser.score += newAmt;
        return clonedUser;
    }
};

const updateTries = function(user) {
    if (user) {
        let clonedUser = R.clone(user);
        clonedUser.tries++;
        return clonedUser;
    }
};


// Test functionality

const getHenry = () => getUser("Henry");
// console.log(getHenry());

const updateHenry = R.pipe(
R.curry(updateScore)(getHenry()),
updateTries,
R.curry(storeUser)(users));
        
console.log(updateHenry(32));
console.log(users);

console.log("End exercise-9-ramda.js");
       
       
       
       
       
       