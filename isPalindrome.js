
/* DESCRIPTION:
Write a function that checks if a given string (case insensitive) is a palindrome. */


// ANSWER //

function isPalindrome(x) {
  //create reversed version of input
  //if reverse is same as normal, return true
  
  let reversed = x.toLowerCase().split('').reverse().join('')
  return reversed === x.toLowerCase();
}
