
/* DESCRIPTION:
*** No Loops Allowed ***

You will be given an array a and a value x. All you need to do is check whether the provided array contains the value,
without using a loop.

Array can contain numbers or strings. x can be either. Return true if the array contains the value, false if not. 
With strings you will need to account for case. */


// ANSWER //

function check(array, value){
  /* The includes() method determines whether an array includes a certain value 
     among its entries, returning true or false as appropriate.*/
  return array.includes(value);
};
