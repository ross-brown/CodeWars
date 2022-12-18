
/* DESCRIPTION:
Write a function that returns the total surface area and volume of a box as an array: [area, volume] */


// ANSWER //

function getSize(width, height, depth) {
  //surface area formula: 2*(l*w + l*h + w*h)
  //volume formula: l*w*h
  
  const surfaceArea = 2 * (depth * width + depth * height + width * height);
  const volume = width * height * depth;
  
  return [surfaceArea, volume];
  
}
