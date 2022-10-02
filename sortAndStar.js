
/*DESCRIPTION:
You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array. */


// ANSWER //

function twoSort(s) {
  return s.sort().shift().split('').join('***')
  // sort array in alphabetical order
  // return first word in array
  // split the word into each letter
  // join the letters back together with '***' as the separator string
}
