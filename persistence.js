
/* DESCRIPTION:
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit. */


// ANSWER //

function persistence(num) {
  let count = 0;
  while (num.toString().length > 1) {
    num = num.toString().split('').reduce((acc, el) => acc * el)
    count++
  }
  return count;
}
