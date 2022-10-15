
/* DESCRIPTION:
Write a function to split a string and convert it into an array of words.

Examples (Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"] */


// ANSWER //

function stringToArray(string){
  //input: string
  //output: array containing each word in the string
  
  /* The split() method takes a pattern and divides a String into an ordered list of substrings
  by searching for the pattern, puts these substrings into an array, and returns the array. */
  
  return string.split(' ');
}
