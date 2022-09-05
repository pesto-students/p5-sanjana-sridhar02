/**
 * Exercise 3.3:
 * What is the output of the below problem and why:[30min]
 *
 * GuideLines:
 * 1.The candidate should be able to explain the code with the desired output
 * OutCome:
 * 1.The candidates will understand how ‘closure’ works in JS.
 * 2.The candidates will understand how ‘encapsulation’ works in JS.
 */

function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }
  return [increment, log];
}

const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); // What is logged?

//Answer : Count is 0
//! since the message variable is assigned only once we are not reassigning the message after every count increase
