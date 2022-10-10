
/* DESCRIPTION:
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4] */


// ANSWER //

function between(a, b) {
  //input: two numbers (a,b)
  //output: array of numbers between a and b INCLUDING a and b
  
  //delcare output variable []
  let output = [];
  //loop through each number starting at 'a' and stopping at 'b', pushing each number to output array
  for (let i = a; i <= b; i++){
    output.push(i);
  }
  //return output array
  return output;
}
