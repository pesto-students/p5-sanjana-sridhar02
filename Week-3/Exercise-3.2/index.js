/**
 * Exercise 3.2:
 * Create 3 simple functions where call, bind and apply are used. The intention of this exercise is to understand how they work and their differences.(0.5 hours)
 
 * Guidelines:
 * 1.The candidate should be able to explain what call, bind and apply in JS are and its differences.
 * 2.Using live examples the candidate should be able to differentiate between them.

 * Outcome:
 * 1.Call, Bind, Apply are very important JS concepts.
 * 2.This exercise should help understand them and also understand the differences between them.
 * 3.Writing examples for the same will help the candidate have a better understanding of when and how they are used in real world scenarios.
 */

var obj = { num: 2 };

function add(a, b) {
  return this.num + a + b;
}

const resultCall = add.call(obj, 2, 3);
const resultApply = add.apply(obj, [2, 3]);

// call & apply are very similar , they both execute the bound function on the object immediately

const funcBind = add.bind(obj, 2, 3);
// bind method does not execute the function right away,instead it creates & returns a bound
// function that can be executed later

const resultBind = funcBind();

console.log({ resultCall, resultBind, resultApply });

// Implementing a new map with call method

function newMap(func) {
  let distArr = [];
  const arrLen = this.length;
  console.log(arrLen);
  for (let i = 0; i < arrLen; i++) {
    distArr.push(func.call(this, this[i]));
  }
  return distArr;
}

Object.defineProperty(Array.prototype, "newMap", {
  value: newMap,
});

const arr = [1, 2, 3];

const newArr = arr.newMap((item) => item * item);

console.log(newArr, "new map square method");
