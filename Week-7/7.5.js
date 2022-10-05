const { Stack } = require("./common");

/**
 * Problem 7.5: Next Greater ELement
 *
 * Given an array arr{} of size N having distinct elements, the task is to find the next greater element for each element of the array in order of their appearance in the array.
 * Next greater element of an element in the array is the nearest element on the right which is greater than the current element. If there does not exist next greater of current element, then next greater element for current element is -1.
 *
 * For example, next greater of the last element is always -1.
 *
 * Example 1:
 * Input:N = 4, arr[] = [1 3 2 4]
 * Output:3 4 4 -1
 * Explanation: In the array, the next larger element to 1 is 3 , 3 is 4 , 2 is 4 and for 4 ? since it doesn't exist, it is -1.
 *
 * Example 2:
 * Input:N = 5, arr[] [6 8 0 1 3]
 * Output:8 -1 1 3 -1
 * Explanation:In the array, the next larger element to 6 is 8, for 8 there is no larger elements hence it is -1, for 0 it is 1 ,for 1 it is 3 and then for 3 there is no larger element on right and hence -1.
 *
 * Expected Time Complexity : O(N)
 * Expected Auxillary Space : O(N)
 * Constraints: 1 ≤ N ≤ 106 1 ≤ Ai ≤ 1018
 */

const printNGE = (arr, N) => {
  //6 8 0 1 3
  const stack = new Stack();
  stack.push(arr[0]); //6
  const result = [];

  for (let i = 1; i < arr.length; i++) {
    while (!stack.isEmpty() && arr[i] > stack.peek()) {
      // 0 > 8
      result.push(arr[i]); // 8
      stack.pop();
    }
    stack.push(arr[i]); // 8
  }

  while (!stack.isEmpty()) {
    result.push(-1);
    stack.pop();
  }

  return result;
};

const printNGE2 = (arr, N) => {
  let stack = [];
  let NGEArr = [];

  for (let i = 0; i < N; i++) {
    NGEArr[i] = -1;

    if (stack.length === 0) {
      stack.push(i);
      continue;
    }

    let index = stack[stack.length - 1];

    while (stack.length !== 0 && arr[index] < arr[i]) {
      NGEArr[index] = arr[i];
      stack.pop();
    }
    stack.push(i);
  }
  return NGEArr;
};

console.log(printNGE([1, 3, 2, 4], 4)); // [3,4,4,-1]
console.log(printNGE([6, 8, 0, 1, 3], 5)); // [8 -1 1 3 -1]
