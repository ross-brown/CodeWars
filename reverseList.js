
/* DESCRIPTION:
In this kata you will create a function that takes in a list and returns a list with the reverse order.

Examples (Input -> Output)
* [1, 2, 3, 4]  -> [4, 3, 2, 1]
* [9, 2, 0, 7]  -> [7, 0, 2, 9] */


// ANSWER //

function reverseList(list) {
  //declare result array
  let result = [];
  //loop over input array backwards
  for (let i = list.length - 1; i >= 0; i--) {
    //push each element to result array
    result.push(list[i]);
  };
  //return result
  return result;
}

// Could also just do ---> return list.reverse();
