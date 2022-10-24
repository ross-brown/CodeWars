
/* DESCRIPTION:
Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 
0 to n ( inclusive ).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2] */


// ANSWER //

function powersOfTwo(n) {
  //declare result array
  let result = [];
  //loop while n is greater than or equal to zero
  while (n >= 0) {
    //add the result of 2 to the power of n to the front of array
    result.unshift(2 ** n);
    //decrement n
    n--;
  };
  return result;
};


