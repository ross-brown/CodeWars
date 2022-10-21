
/* DESCRIPTION:
All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as 
the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring
the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but
these will not appear at the beginning or end of the string. They will not contain numerals.*/


// ANSWER //

function feast(beast, dish) {
  //assign first and last letter of each parameter to a variable 
  let beastFirst = beast[0];
  let beastLast = beast[beast.length - 1];
  let dishFirst = dish[0];
  let dishLast = dish[dish.length - 1];
  //return the evaluated result of checking if those letters are the same
  return beastFirst === dishFirst && beastLast === dishLast;
};
