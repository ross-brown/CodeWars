
/* DESCRIPTION:
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings. */


// ANSWER //

function areYouPlayingBanjo(name) {
  //check if first letter of name is "R" OR "r"
  if(name[0] === 'R' || name[0] === 'r'){
    //if so, return name plays banjo
    return name + " plays banjo";
  } else {
    //else, reutrn name does not play banjo
    return name + " does not play banjo";
  };
};
