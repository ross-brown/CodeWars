
/* DESCRIPTION:
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F */


// ANSWER //

function abbrevName(name){
  //split name into array by spaces
  return name.split(' ').map(el => el[0].toUpperCase()).join('.');
  //map over each part of name and only take 1st letter and make it uppercase in new array
  //array with intials.join('.')
};


