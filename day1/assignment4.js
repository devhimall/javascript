// How do var, let, and const differ in terms of scope and hoisting? Write a code differentiating them.

// var keyword has global scope and it return undefined even if it is not define before it is using.
function IsGreater() {
  let num2 = 44
  let num3 = 10

  if (num1 > num2 && num1 > num3) {
    console.log(`${num1} is greater than ${num2} and ${num3}`) //num1 will get undefined error
  } else if (num2 > num1 && num2 > num3) {
    console.log(`${num2} is greater than ${num1} and ${num3}`) //num1 will get undefined error
  } else {
    console.log(`${num3} is greater than ${num1} and ${num2}`) //num1 will get undefined error
  }
  var num1 = 12 //defining var num1 here.
  console.log(`Hi, my name is ${name}`) // this will return reference error
  console.log(`I live in ${address}`) // This is will also get reference error
  let name = "Himal Tamang"
  const address = "Boudha"
}

//calling the function

IsGreater()
