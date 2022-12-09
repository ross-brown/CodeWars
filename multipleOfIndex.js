
/* DESCRIPTION:
Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

Some cases:
[22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

[68, -1, 1, -7, 10, 10] => [-1, 10]

[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68] */


// ANSWER //

function multipleOfIndex(array) {
//   //declare result array
//   let result = [];
//   //loop through input array
//   for (let i = 0; i < array.length; i++) {
//     //check if element is mulitple of index
//     if (array[i] % i === 0) {
//        //if so, push to result
//       result.push(array[i]);
//     };
//   };
//   //return result array
//   return result;
  
  return array.filter((el, i) => el % i === 0);
};
