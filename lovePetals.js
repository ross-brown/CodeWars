
/* DESCRIPTION:
Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases
each time a petal was torn:

"I love you"
"a little"
"a lot"
"passionately"
"madly"
"not at all"
If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals.
The number of petals is always greater than 0. */


// ANSWER //

function howMuchILoveYou(nbPetals) {
  if (nbPetals % 6 === 1) {
    return 'I love you';
  } else if (nbPetals % 6 === 2) {
    return 'a little';
  } else if (nbPetals % 6 === 3) {
    return 'a lot';
  } else if (nbPetals % 6 === 4) {
    return 'passionately';
  } else if (nbPetals % 6 === 5) {
    return 'madly';
  } else {
    return 'not at all';
  }
};

//1, 7, 13, 19, 25
//2, 8, 14, 20, 26
//3, 9, 15, 21, 27
//4, 10, 16, 22, 28
//5, 11, 17, 23, 29
