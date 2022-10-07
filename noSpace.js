
/* DESCRIPTION:
Simple, remove the spaces from the string, then return the resultant string. */


// ANSWER //

function noSpace(x){
  let result = '';
  for (let i = 0; i < x.length; i++){
    if (x[i] !== ' '){
      result += x[i]
    }
  }
  return result
}
