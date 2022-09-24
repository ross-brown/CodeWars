
/*DESCRIPTION:
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered! */


// ANSWER //

function getSum(a, b){
  let high = Math.max(a, b);
  let low = Math.min(a, b);
  let result = 0;
  
  for (let i = low; i <= high; i++) {
    result += i;
  }
  return result;
}
