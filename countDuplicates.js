
/* DESCRIPTION:
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits. */


// ANSWER //

function duplicateCount(text){
  let result = [];
  let sortedText = text.toLowerCase().split('').sort();
  for (let i = 0; i < sortedText.length; i++) {
    if (sortedText[i] === sortedText[i + 1] && !result.includes(sortedText[i])) {
      result.push(sortedText[i]);
    }
  }
  return result.length;
}


