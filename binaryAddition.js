
/*DESCRIPTION:
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string. */

// ANSWER //

function addBinary(a,b) {
  // optional parameter for toString() is for radix to dictate the base of a numerical system (2 = binary)
  return (a+b).toString(2)
}
