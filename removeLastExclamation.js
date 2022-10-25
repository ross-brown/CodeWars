
/* DESCRIPTION:

Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
remove("Hi!") == "Hi"
remove("Hi!!!") == "Hi!!"
remove("!Hi") == "!Hi"
remove("!Hi!") == "!Hi"
remove("Hi! Hi!") == "Hi! Hi"
remove("Hi") == "Hi" */


// ANSWER //

function remove (string) {
  //convert string to array by chars
  let chars = string.split('');
  //if last element is "!"
  if (chars[chars.length - 1] === '!') {
    //pop off last element 
    chars.pop();
  };
  //return string joined back together
  return chars.join('');
};

