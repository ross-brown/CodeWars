
/* DESCRIPTION:
Given an array of ones and zeroes, convert the equivalent binary value to an integer. */


// ANSWER //

const binaryArrayToNumber = arr => {
  return parseInt(arr.join(''), 2)
};

//parameters of parseInt(string, radix)
