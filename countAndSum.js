
/* DESCRIPTION:
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array. */


// ANSWER //

function countPositivesSumNegatives(input) {
  let counter = 0;
  let negativeNums = 0;
  if (input === null || input.length === 0) {
    return [];
  } else {
    input.forEach((num) => num > 0 ? counter++ : negativeNums += num);
  }
  return [counter, negativeNums]
}
