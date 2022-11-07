
/* DESCRIPTION:
We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it.

For example, the following code will result in an array containing the numbers 0 to 4:

arr(5) // => [0,1,2,3,4]
Note: The parameter is optional. So you have to give it a default value. */


// ANSWER //

const arr = N => {
  //declare empty result array
  let result = [];
  //loop from 0 to N and push that number to the result array
  for (let i = 0; i < N; i++) {
    result.push(i);
  };
  // return result array
  return result;
};
