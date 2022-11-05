
/* DESCRIPTION:
Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up
calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions.

Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting
more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in 
the future and in the past.

Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)."
If the year of birth equals the year requested return: "You were born this very year!"

"..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", 
depending on the result. */


// ANSWER //

function calculateAge(birthYear, countYear) {
  //check if count year is after or before birth year
   //if its after, subtract birth year from count year and return string output 
  if (countYear > birthYear) {
    return `You are ${countYear - birthYear} year${(countYear - birthYear) > 1 ? 's' : ''} old.`;
     //if its before, subtract count year from birth year and retunr string output 
  } else if (countYear < birthYear) {
    return `You will be born in ${birthYear - countYear} year${(birthYear - countYear) > 1 ? 's' : ''}.`;
    // if its the same year
  } else {
    return `You were born this very year!`
  };
};
