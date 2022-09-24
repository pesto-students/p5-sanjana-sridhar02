/**
 * Exercise5.3:
 *
 * Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
 *
 * Guidelines:
 * 1.Reference
 * hasDuplicate([1,5,-1,4]) // false
 * const hasDuplicate=arr=>newSet(arr).size!==arr.length
 *
 * 2.JS function should have Set API implemented.
 * 3.Bonus - if space and time complexity is taken care.
 *
 * Outcome:1.Understanding of Set API and its functionalities.
 */

function hasDuplicate(arr) {
  return new Set(arr).size !== arr.length;
}

// Tests
console.log(hasDuplicate([4, 5, 4, 4, 5, 4]), hasDuplicate([1, 2, 3, 4]));
