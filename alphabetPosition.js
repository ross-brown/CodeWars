
/* DESCRIPTION:
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc. */


// ANSWER //

function alphabetPosition(text) {
  let result = ''
  for (let i = 0; i < text.length; i++) {
    let code = text.toUpperCase().charCodeAt(i)
    //UTF-16 code: 65-90 is [A-Z]
    if (code > 64 && code < 91) {
      result += (code - 64) + ' '
    }
  }
  return result.slice(0, result.length-1)
}
