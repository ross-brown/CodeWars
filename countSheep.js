
/* DESCRIPTION:
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers. */


// ANSWER //

var countSheep = function (num){
  let sleep = [];
  for (let i = 1; i <= num; i++) {
    sleep.push(`${i} sheep...`)
  }
  return sleep.join('');
  
}
