//Functional Approach
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

const clone = (o) => JSON.parse(JSON.stringify(o));

const pipe = function(...fns) {
  return function(x) {
      return fns.reduce(function(v, f) {
          return f(v);
      }, x);
  }
};

const compose = function(...fns) {
  return function(x) {
      return fns.reduceRight(function(v, f) {
          return f(v);
      }, x);
  }
};


let userFld = document.getElementById('user');
let statusFld = document.getElementById('score');

const createUser = function(id) {
    return {
        userId: id,
        questions: []
    };
};

const addQuestion = function(qID, response, result, weight, user) {
    const questions = clone(user.questions);
    const newQuestion = {
        qID: qID,
        response: response,
        result: result,
        weight: weight
    };
    return {
        userId: user.userId,
        questions: [...questions, newQuestion]
    };
}

const calcScore = function(user) {
    return user.questions.reduce((tot, quest) => tot + (quest.result ? quest.weight : 0), 0);
}

const calcPossible = function(user) {
    return user.questions.reduce((tot, quest) => tot + quest.weight, 0);
};

const formatResults = (user) => calcScore(user) + " out of " + calcPossible(user);

const getProp = (prop, obj) => obj[prop];


/* IMPURE: a lot of modifying of the DOM */
const setDOMelem = (elem, data) => elem.innerHTML = data;
    
const displayResults = pipe(
    formatResults,
    curry(setDOMelem)(statusFld));

const displayUser = pipe(
    curry(getProp)('userId'),
    curry(setDOMelem)(userFld));


const updateScore = function(user, qID, response, result, weight) {
    let usr = addQuestion(qID, response, result, weight, user);
    /* side effects */
    displayResults(usr);
    displayUser(usr);
    return usr;
};

/*
To test at console:

const usr1 = createUser(1);

const usr2 = updateScore(usr1, "q1", "answer", true, 1);
const usr3 = updateScore(usr2, "q2", "wrong answer", false, 2);
*/




