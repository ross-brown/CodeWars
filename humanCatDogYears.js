
/* DESCRIPTION:

Kata Task
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that */


// ANSWER //

var humanYearsCatYearsDogYears = function(humanYears) {
  //input: a single number (humanYears)
  //output: an array with 3 elements (humanYears, catYears, dogYears)
  //if humanYears > 1 -> catYear 24 + (+4) each year after 2
  let catYears;
  let dogYears;
  
  if (humanYears < 2){
    catYears = 15;
    dogYears = 15;
  } else if (humanYears < 3){
    catYears = 24;
    dogYears = 24;
  } else {
    catYears = 24 + (humanYears - 2) * 4;
    dogYears = 24 + (humanYears - 2) * 5;
  }
  return [humanYears, catYears, dogYears]; 
};



