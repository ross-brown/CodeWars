
/* DESCRIPTION:
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds. */

// ANSWER //

function past(h, m, s){
  let sMili = s * 1000;
  let mMili = m * 60000;
  let hMili = h * 3600000;
  
  return sMili + mMili + hMili;
}
