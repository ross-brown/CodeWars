
/* DESCRIPTION:
You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested. */


// ANSWER //

function otherAngle(a, b) {
  //interior angles add up to 180 (a+b+c = 180)
  let sideC = 180 - (a + b);
  return sideC;
}
