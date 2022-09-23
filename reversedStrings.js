
// Description: Complete the solution so that it reverses the string passed into it.

//Answer//

function solution(str){
  let reversedWord = [];
  // loop through string in reverse, adding each letter to an array
  for (let i = str.length - 1; i >= 0; i-- ) {
    reversedWord.push(str[i]);
  }
  // concat the elements in the array together into a string
  return reversedWord.join('');
};
