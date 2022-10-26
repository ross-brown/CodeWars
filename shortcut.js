
/* DESCRIPTION:
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata */


// ANSWER //

function shortcut (string) {
  //use replace method and regex to replace every instance of a lowercase vowel with nothing ''
  return string.replace(/[aeiou]/g, '');
};
