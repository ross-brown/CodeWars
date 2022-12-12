
/* DESCRIPTION:
This is the first step to understanding FizzBuzz.

Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

Your expected output is an array of positive integers from 1 to n (inclusive).

Your job is to write an algorithm that gets you from the input to the output. */


// ANSWER //

function preFizz(n) {
  //declare output array
  let output = [];
  //loop starting at 1 up to (and inlude) n
  for (let i = 1; i <= n; i++) {
    //push i to output array
    output.push(i);
  };
  //return output array
  return output;
};
