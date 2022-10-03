/**
 * Problem 6.6 : 3 sum
 * 
 * Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target.Return the sum of the three integers.Assume that there will only be one solution
 * 
 * Example: given array S = {-1 2 1 -4}, and target = 1. The sum that is closest to the target is 2. (-1 + 2 + 1 = 2)
 * 
 * Assignment Introduction:
 * ● Calculate the time and space complexity for the set of questions
 * ● A set of  Problem statement based on array that would help student how to iterate and process an array
 * 
 * Benchmarks
 *  ● All the problem should have an optimize solutions
 *  ● All the problem statement should have the time  and space complexity mention in the code comment
 *  ● The code should be readable and must follow good coding practice.●Keep the code as modular as you can.
 * 
Learning Outcomes:
  ● Student will have a good grip on calculating time and space complexity of given loop or program
  ● Students will learn how to iterate and process array
  ● Students will learn how to use Two pointer and Kadane Algorithm to optimize code.
  ● Students will be able to solve easy to medium level array problem
 */

// If we use Brute force approach like 3 for loops then the time complexity becomes O(n3) & space complexity is O(1)

const threeSumCloset = (nums, target) => {
  if (nums === null || nums.length <= 2) closetSum = null;
  if (nums.length === 3) closetSum = nums[0] + nums[1] + nums[2];

  // Sort array

  nums.sort((a, b) => a - b);
  let closet = Infinity;
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      let currentDiff = sum - target;
      if (currentDiff > 0) {
        // too large, make it smaller by moving k to the left
        right -= 1;
      } else {
        // get the +ve diff
        currentDiff = target - sum;
        // too small, make it larger by moving it to the right
        left += 1;
      }

      // keep tracking the current closet & update the current sum
      if (currentDiff < closet) {
        closet = currentDiff;
        result = sum;
      }
    }
  }
  return result;
};

// Time complexity: O(n2)
// Space complexity : O(1)

// Test cases
console.log(threeSumCloset([-1, 2, 1, -4], 1));
