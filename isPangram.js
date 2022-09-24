
/* DESCRIPTION:
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation. */


// ANSWER //

function isPangram(string){
  let newStr = string.toLowerCase();
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  for (let i = 0; i < alphabet.length; i++) {
    if (newStr.indexOf(alphabet[i]) < 0) {
      return false;
    }
  }
  return true;
}

//convert string to all lowercase
//create alphabet array
//loop thorugh the array and check if the index of that letter exists in string (if its not -1)
