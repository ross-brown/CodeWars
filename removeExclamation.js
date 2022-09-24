
/* DESCRIPTION:
Write function RemoveExclamationMarks which removes all exclamation marks from a given string. */


// ANSWER //

function removeExclamationMarks(s) {
    return s.split('').filter(char => char !== '!').join('')
}
