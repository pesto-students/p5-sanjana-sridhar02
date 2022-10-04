/**
 * Stack and QueueProblem
 * 7.4: Parenthesis Checker
 * Given an expression string x. Examine whether the pairs and the orders of“{“,”}”,”(“,”)”,”[“,”]” are      correct in exp.
 *
 * For example, the function should return 'true' for exp= “[()]{}{()()}” and 'false' for exp = “[(])”.
 *
 * Example 1:Input:{([])}
 * Output:trueExplanation:{ ( [ ] ) }.
 * Same colored brackets can form balanced pairs, with 0 number of unbalanced bracket.
 *
 * Example 2:
 * Input:()
 * Output:true
 * Explanation:().
 * Same bracket can form balanced pairs, and here only 1 type of bracket is present and in balanced way
 *
 * Example 3:
 * Input:([]
 * Output:false
 * Explanation:([].
 * Here square bracket is balanced but the small bracket is not balanced and Hence , the output will be unbalanced.Expected
 *
 * Time Complexity: O(|x|)
 * Expected Auixilliary Space: O(|x|)Constraints: 1 ≤ |x| ≤ 32000
 */

const pairsObject = {
  "[": "]",
  "{": "}",
  "(": ")",
};

const isValid = (s) => {
  const stack = [];
  for (const parameter of s) {
    if (pairsObject.hasOwnProperty(parameter)) {
      stack.push(parameter);
    } else {
      const closeParam = stack.pop();
      if (parameter !== pairsObject[closeParam]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(isValid("()]")); // false
console.log(isValid("()")); // true
console.log(isValid("()][")); // false
