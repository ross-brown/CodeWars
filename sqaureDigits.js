
/* DESCRIPTION:
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-35)

Note: The function accepts an integer and returns an integer. */


// ANSWER //

function squareDigits(num) {
  //declare an empty output string and covert the input num into a string
  let result = '';
  let inputNum = String(num);
  //loop over the stringified input num and square each digit and concat to the result variable
  for (let i = 0; i < inputNum.length; i++) {
    let square = parseInt(inputNum[i]) ** 2;
    result += square;
  }
  //return result converted to a number 
  return parseInt(result);
}
