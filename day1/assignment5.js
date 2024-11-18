// Write a function scopingExample() that demonstrates the following:
// A global variable x accessible throughout the script.
// A local variable x inside a function that shadows the global variable.
// A block-level variable x that is scoped to an if block inside the function.

var x = "Hi, i am x and i am globally scope"
function scopingExample() {
  var x = "Hi, i am x and i am function scope" //shadowing the global scope variable x.

  if (10 < 12) {
    const x = "Hi, i am x and i am block scope" //block scope x.
    console.log(x) //this call the block scope variable x
  }

  console.log(x) // this is function scope and this call function scope variable x.
}

console.log(x) // this call the gloabll scope variable
scopingExample()
console.log(x) //this also call globally scope variable x that means even after shawing the variable in block and local scope we know that global variable is unaffected.
