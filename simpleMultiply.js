
/* DESCRIPTION:
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise. */


// ANSWER //

function simpleMultiplication(num) {
    return num % 2 ? num*9 : num*8
}
