
/* DESCRIPTION:
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out. */


// ANSWER //

function filter_list(l) {
  return l.filter(val => typeof val === 'number')
}



