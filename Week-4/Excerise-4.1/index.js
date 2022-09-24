function getRandomNumber() {
  return Math.floor(Math.random() * 1000);
}

// Function to check whether the input number is divisible by 5 or not
function checkIsDivisible(num) {
  if (num % 5 === 0) {
    return true;
  }
  return false;
}
