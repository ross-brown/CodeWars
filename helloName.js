
/* DESCRIPTION:
Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

Examples:

* With `name` = "john"  => return "Hello, John!"
* With `name` = "aliCE" => return "Hello, Alice!"
* With `name` not given 
  or `name` = ""        => return "Hello, World!" */


// ANSWER //

function hello(name) {
  //if input is truthy value (not empty string or undefined)
  if (name) {
    //convert all to lowercase
    let nameLower = name.toLowerCase();
    //chnage it to uppercase first letter
    let nameCased = nameLower.charAt(0).toUpperCase() + nameLower.slice(1);
    //return hello with name
    return `Hello, ${nameCased}!`;
  } else {
    //if falsy input, return hello world
    return "Hello, World!"
  }
}
