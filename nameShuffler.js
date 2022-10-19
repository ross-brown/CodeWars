
/* DESCRIPTION:
Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john" */


// ANSWER //

function nameShuffler(str){
  //split str into array by word
  let array = str.split(' ');
  //use templete literals to concat last name in front of first name
  return `${array[1]} ${array[0]}`;
}

//could also have used reverse() method followed by join();
