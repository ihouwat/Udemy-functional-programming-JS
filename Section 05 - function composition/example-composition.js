str = 'Innovation distinguishes between a leader and a follower.';

const trim = str => str.replace(/^\s*|\s*$/g, '');

const noPunct = str => str.replace(/[?.,!]/g,'');

const capitalize = str => str.toUpperCase();

const breakout = str => str.split(" ");

const noArticles = str => (str !== "A" && str !== "AN" && str !== "THE");

const filterArticles = arr => arr.filter(noArticles);

// First approach, COMPOSE (right-to-left): difficult to read and type
//console.log(filterArticles(breakout(capitalize(noPunct(trim(str))))));


/*  COMPOSE function (right-to-left), similar to console.log on line 16
    relies on 
        1 ) Array.prototype.reduceRight and 
        2) spread operator to accept multiple arguments in one array


// Step 0: create compose function 
const compose = function(...fns) {
    // compose returns the function we can use in prepareString() below
    // closure is created over fns variable. So, nested function has access to that fns array
    return function(x) {
        // val is the accumulated return value over each iteration on array
        // func is the current value that is being iterated over
        // the 'x' parameter is the first val passed in reduceRight
        return fns.reduceRight(function(val,func) {
            return func(val);
        }, x);
    }
};

// Step 1: compose desired functions
const prepareString = compose(
    filterArticles, 
    breakout, 
    capitalize, 
    noPunct, 
    trim);

// Step 2: result of composition
prepareString = function(x) {
    return fns.reduceRight(function(val,func) {
        return func(val);
    }, x);
}

// Step 3: invoke prepareString
var invoke = prepareString(str);

// Step 4: after reduceRight completes iterations
invoke = return filterArticles(breakout(capitalize(noPunct(trim(x)))));

// Step 5: functions are invoked
*/

// Second approach, PIPE (left-to-right)
// relies on Array.prototype.reduce
const pipe = function(...fns) {
    return function(x) {
        return fns.reduce(function(v, f) {
            return f(v);
        }, x);
    }
};

const prepareString = pipe(
    trim,
    noPunct,
    capitalize,
    breakout,
    filterArticles);



console.log(prepareString(str));