
/* DESCRIPTION:
Complete the square sum function so that it squares each number passed into it and then sums the results together. */


// ANSWER //

function squareSum(numbers){
  let squared = [];
  for (let i = 0; i < numbers.length; i++) {
    squared.push(numbers[i]**2)
  }
  return squared.reduce((a,b) => a+b, 0)
}
