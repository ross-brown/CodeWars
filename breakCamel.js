
/* DESCRIPTION:
Complete the solution so that the function will break up camel casing, using a space between words. */


// ANSWER //

function solution(string) {
  let newStr = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      newStr += ' '
      newStr += string[i]
    } else {
      newStr += string[i];
    }
  }
  return newStr;
}
