
const users = [{name: "James",score: 30,tries: 1}, {name: "Mary", score: 110,tries: 4}, {name: "Henry",score: 80,tries: 3}];

function curry(fn,arity = fn.length) {
    return (function nextCurried(prevArgs){
        return function curried(nextArg){
            var args = [ ...prevArgs, nextArg ];
            if (args.length >= arity) {
                return fn( ...args );
            }
            else {
                return nextCurried( args );
            }
        };
    })( [] );
}

const pipe = function(...fns) {
  return function(x) {
      return fns.reduce(function(v, f) {
          return f(v);
      }, x);
  }
};

//Modifies Data
var storeUser = function(arr, user) {
    return arr.map(function(val) {
        if (val.name.toLowerCase() === user.name.toLowerCase()) {
            return user;
        } else {
            return val;
        }
    });

    /*for (let i = 0; i < arr.length; i++) {
        if (arr[i].name.toLowerCase() === user.name.toLowerCase()) {
            arr[i] = user;
            break;
        }
    }*/
};

//Pure Functions
const cloneObj = function(obj) {
    return JSON.parse(JSON.stringify(obj));
};

var getUser = function(arr, name) {
    return arr.reduce(function(obj, val) {
        if (val.name.toLowerCase() === name.toLowerCase()) {
            return val;
        } else {
            return obj;
        }
    }, null);


    /*for (let i = 0; i < arr.length; i++) {
        if (arr[i].name.toLowerCase() === name.toLowerCase()) {
            return arr[i];
        }
    }
    return null;*/
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

var printStats = (user) => [user.score, user.tries];

// const usr = getUser(users, "Henry");
// const usr1 = updateScore(cloneObj(usr), 30);
// const usr2 = updateTries(cloneObj(usr1));
// const newArray = storeUser(users, usr2);

//Using currying and composition create a specialized function that always acts on the users array but allows you to enter a user name. Have it return a clone of that user.
const curriedGetUser = pipe(
  curry(getUser)(users),
  cloneObj
);


//Using your curried function, compose a new specialized function that will be used to update Henry. (Only invoked if you want to update Henry). It should accept a new score and then return a new array that contains the updated score and tries. To compose this function you may need to create other functions.
const getHenry = curriedGetUser("Henry");

const updateHenryScore = pipe(
  curry(updateScore)(getHenry),
  updateTries,
  curry(storeUser)(users),
)

const updateHenryScoreTest = updateHenryScore(50);