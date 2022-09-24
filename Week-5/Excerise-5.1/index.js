/**
 * Exercise5.1:
 * Create 3 functions, for example doTask1(), doTask2() and doTask3(). These three functions should be executed sequentially using both Async and Await.
 *
 * Execute these three 3 callback functions asynchronously using Async Await and Generators.
 *
 * Guidelines:
 * 1.2 functions should be created. One for Async/Await and the other one for Generators.
 * 2.3rd party libraries should not be used.
 * 3.Custom Function should carry a meaningful name.
 * 4.The program should execute without errors.
 * 5.The program should achieve the desired result.
 * 6.The program should take care of all 3 states of a Promise.
 * 7.Should be committed to Git with meaningful commit messages.
 *
 * Outcome:
 * 1.Under the hood understanding of how a Generator works.
 * 2.Under the hood understanding of how Async/await works.
 */

function doTask1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task 1 completed"), 1000;
    });
  });
}

function doTask2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task 2 completed"), 1000;
    });
  });
}

function doTask3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task 3 completed"), 1000;
    });
  });
}

// creating a generator function
async function* taskGenerator() {
  yield await doTask1();
  yield await doTask2();
  yield await doTask3();
}

// creating a generator object
const doTask = taskGenerator();

doTask.next().then((res) => console.log(res.value));
doTask.next().then((res) => console.log(res.value));
doTask.next().then((res) => console.log(res.value));
