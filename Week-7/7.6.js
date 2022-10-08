/**
 * Problem 7.6: Implement a Queue using 2 stack
 *
 * Implement a Queue using 2 stacks s1 and s2 . A Query Q is of 2 Types (i) 1 x (a query of this type means pushing 'x' into the queue) (ii) 2 (a query of this type means to pop element from queue and print the poped element)
 *
 * Example 1:
 * Input:5 1 2 1 3 2 1 4 2
 * Output:2 3
 * Explanation:In the first test case 1 2 the queue will be {2}
 * 1 3 the queue will be {2 3}
 * 2 poped element will be 2 the queue will be {3}
 * 1 4 the queue will be {3 4}
 * 2 poped element will be 3.
 *
 * Example 2:
 * Input:41 2 2 2 1 4
 * Output:2 -1
 * Explanation:In the second test case
 * 1 2 the queue will be {2}
 * 2 poped element will be 2 and then the queue will be empty 2 the queue is empty and hence -1
 * 1 4 the queue will be {4}.
 *
 * Expected Time Complexity : O(1) for push() and O(N) for pop() or O(N) for push() andO(1) for pop()
 * Expected Auxillary Space : O(1).
 * Constraints: 1 <= Q <= 100 1 <= x <= 100
 */
const { Stack } = require("./common");

// FIFO
class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enQueue(item) {
    this.stack1.push(item);
  }

  deQueue() {
    if (this.stack2.length > 0) {
      this.size = this.stack1.length + this.stack2.length - 1;
      return this.stack2.pop();
    }

    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop());
    }

    this.size = this.stack1.length + this.stack2.length - 1;
    return this.stack2.pop();
  }

  peek() {
    return this.stack2.peek();
  }
}

const input = [1, 2, 1, 3, 2, 1, 4, 2];

const queue = new Queue();

for (let i = 1; i < input.length; i++) {
  //   console.log(input[i]);
  if (input[i] === 1) {
    queue.enQueue(input[i + 1]);
    // console.log(input[i + 1]);
    i++;
  } else if (input[i] === 2) {
    console.log(queue.deQueue());
  }
}
