// curry function accepts a function and the arity (default value is number of arguments)
function curry(fn,arity = fn.length) {
  // returns a IIFE nextCurried function, 
  // reason for IIFE is closure: curried() has closure over nextCurried()
  // prevArgs is an array that gradually adds arguments, one by one
    return (function nextCurried(prevArgs){
      // the following is what most curried functions contain
        return function curried(nextArg){
console.log(prevArgs);
console.log(nextArg);
            // adds new arguments to previous arguments
            var args = [ ...prevArgs, nextArg ];
            // base case: once we have the right arity #, return the original fn
            if (args.length >= arity) {
                return fn( ...args );
            }
            else {
              // if we need more arguments, recursively call nextCurried again
              // remember we still have closure over curry()
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

const compose = function(...fns) {
    return function(x) {
        return fns.reduceRight(function(v, f) {
            return f(v);
        }, x);
    }
};
