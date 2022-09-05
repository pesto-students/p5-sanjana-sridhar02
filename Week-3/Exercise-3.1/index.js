/**
 * Exercise 3.1:
 * Create a memoize function that remembers previous inputs and stores them in cache so that it won’t have to compute the same inputs more than once. The function will take an unspecified number of integer inputs and a reducer method.(1.5hours)
 *
 * Guidelines:
 * 1.The memozie function should be written from scratch.
 * 2.3rd party libraries such as lodash or underscore should not have been used.
 * 3.The function should carry a name which should denote the functionality of it.
 * 4.The function should be able to take n number of arguments.
 *
 * Outcomes:
 * 1.Understanding how caching works.
 * 2.Why is it important?
 * 3.The problem memoization solves
 */

//Given reducer method:
function add(a, b) {
  return a + b;
}

function memoize(fn) {
  const cache = new Map();
  console.log({ cache });
  return function (...args) {
    const key = args.toString();
    if (cache.has(key)) {
      return cache.get(key);
    }
    cache.set(key, fn(...args));
    return cache.get(key);
  };
}

function time(fn) {
  console.time();
  fn();
  console.timeEnd();
}

//Create a method called memoize such that:
const memoizeAdd = memoize(add); //then calling...
time(() => memoizeAdd(100, 100)); //returns 200
time(() => memoizeAdd(100)); //returns 100
time(() => memoizeAdd(100, 200)); //returns 300
time(() => memoizeAdd(100, 100)); //returns 200 without computing
time(() => memoizeAdd(100, 400));
