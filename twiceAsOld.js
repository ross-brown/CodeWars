
/* DESCRIPTION:
Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). 
The answer is always greater or equal to 0, no matter if it was in the past or it is in the future. */


// ANSWER //

function twiceAsOld(dadYearsOld, sonYearsOld) {
  //input: 54, 24 (30 year diff)
  //output: 6 
  
  //input: 67, 44 (23 year diff)
  //output: 21
  
  //calculate difference in years between dad and son
  let yearDiff = dadYearsOld - sonYearsOld;
  //the difference in years minus the age of the son will find how many years the doubling point was/is
  let yearsAgo = Math.abs(yearDiff - sonYearsOld);
  
//   return Math.abs((dadYearsOld - sonYearsOld) - sonYearsOld) ------ ONE LINER ----
  
  return yearsAgo;
};
