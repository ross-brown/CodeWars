
/* DESCRIPTION:
Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order. */


// ANSWER //

function comp(array1, array2){
  // sort both arrays in ascending order
  // take sqrt of each element in array2 and check if its === to the elemet in array 1
  // if they all equal each other, return true 
  if (array1 === null || array2 === null ) {
    return false;
  }
  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);
  return array1.map(x => x*x).every((x, i) => x == array2[i])
}
