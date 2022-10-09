
/* DESCRIPTION:
Sentence Smash
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence! */


// ANSWER //

function smash (words) {
  //input: array of strings
  //output: string with the words concatenated with spaces
   // array method .join() = creates/returns a new string by concatenating all the array elements with a separator parameter
  return words.join(' ')
};
