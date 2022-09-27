/**
 * Problem 6.3 Sort array of 0's,1's and 2's
 *
 * Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.
 *
 * Example 1:Input:
 * N = 5
 * arr[]= {0 2 1 2 0}
 * Output:0 0 1 2 2
 * Explanation: 0's 1's and 2's are segregated into ascending order.
 *
 * Example 2:Input:
 * N = 3
 * arr[] = {0 1 0}
 * Output:0 0 1
 *
 * Explanation: 0s 1s and 2s are segregated into ascending order.
 * Time Complexity: O(N)Expected Auxiliary Space: O(1)
 *
 * Constraints: 1 <= N <= 10^6 0 <= A[i] <= 2
 */

// Function to swap two elements
const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

const sortArr = (arr) => {
  // using inbuilt sorting
  // return arr.sort((a, b) => a - b);
  let start = 0;
  mid = 0;
  high = arr.length - 1; // 5

  while (mid <= high) {
    // 1 < 5
    switch (
      arr[mid] // 0
    ) {
      case 0:
        swap(arr, start, mid); //
        start++; // 1
        mid++; // 1
        break;

      case 1:
        mid++; // 1
        break;

      case 2:
        swap(arr, mid, high);
        high--;
        break;
    }
  }
  return arr;
};

// Time complexity : O(n)
// Space complexity : O(1)

console.log(sortArr([0, 1, 2, 2, 1, 0]));
