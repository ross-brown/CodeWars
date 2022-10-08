
/* DESCRIPTION:
When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".

If your language supports it, try using a switch statement. */


// ANSWER //

function switchItUp(number){
  //input: number 0-9
  //output: string -> 1 = "One" 2 = "Two", etc.
  
  //switch statement 
  switch (number){
    case 0:
      return "Zero"
      break;
    case 1: 
      return "One"
      break;
    case 2:
      return "Two"
      break;
    case 3:
      return "Three"
      break;
    case 4:
      return "Four"
      break;
    case 5:
      return "Five"
      break;
    case 6:
      return "Six"
      break;
    case 7:
      return "Seven"
      break;
    case 8:
      return "Eight"
      break;
    case 9:
      return "Nine"
      break;
    default:
      return "Invalid Input"
  }
}
