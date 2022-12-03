
/* DESCRIPTION:
Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input.
Return the result rounded to two decimals.


Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc) */


// ANSWER //

function squareArea(A){
  let radius = 2 * A / (Math.PI);
  return radius**2
}

//circumference = 2πr
//A = πr/2
//radius = 2A/π
//area of square = side * side
