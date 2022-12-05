
/* DESCRIPTION:
What if we need the length of the words separated by a space to be added at the end of that same word and
have it returned as an array?

Example(Input --> Output)

"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word 
added to each element .

Note: String will have at least one element; words will always be separated by a space. */


// ANSWER //

function addLength(str) {
  // declare result array
  let result = [];
  //split string into words array
  let words = str.split(' ');
  //loop over words array and push the word with its length prop concat to it to result array
  for (let i = 0; i < words.length; i++) {
    result.push(`${words[i]} ${words[i].length}`);
  }
  return result;
}

//one-liner:
// return str.split(' ').map(w => `${w} ${w.length}`)




