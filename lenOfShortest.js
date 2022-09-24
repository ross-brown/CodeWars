
/* DESCRIPTION:
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types. */


// ANSWER //

function findShort(s){
  let lengthArray = [];
  for (let i = 0; i < s.split(' ').length; i++) {
    lengthArray.push(s.split(' ')[i].length)
  }
  return lengthArray.sort((a,b) => a-b).shift()
}
