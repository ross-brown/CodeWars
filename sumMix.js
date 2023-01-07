
/* DESCRIPTION:
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number. */


// ANSWER //

function sumMix(array){
  //declare output sum
  let sum = 0;
  //loop thourgh each element in input array
  for (let i = 0; i < array.length; i++) {
    //if the current element is a string...
    if (typeof array[i] === 'string') {
      //convert string to number and add to sum
      sum += Number(array[i])
    } else {
      //otherwise just add to sum
      sum += array[i]
    }
  }
  //return sum
  return sum;
}
