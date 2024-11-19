// var firstName = "Iron"
// var lastName = "Man"

// console.log(`My marvel favourite character is ${firstName} ${lastName}`)

// let num1 = 10

// for (let i = 0; i <= num1; i++) {
//   let sum = num1 + i

//   console.log(` the sum of ${i} and ${num1} is: ${sum}`)
// }

// function isGreater(...arguments) {
//   console.log(arguments.length)
//   if (arguments[0] > arguments[1] && arguments[0] > arguments[2]) {
//     console.log(
//       `${arguments[0]} is greater than ${arguments[1]} and ${arguments[2]}`
//     )
//   } else if (arguments[1] > arguments[0] && arguments[1] > arguments[2]) {
//     console.log(
//       `${arguments[1]} is greater than ${arguments[0]} and ${arguments[2]}`
//     )
//   } else {
//     console.log(
//       `${arguments[2]} is greater than ${arguments[1]} and ${arguments[0]}`
//     )
//   }
// }

// isGreater(2, 666, 4)

// debugger
// const MaxNum = (...args) => {
//   let result = args.reduce((acc, curr) => (acc > curr ? acc : curr), 0)
//   return result
// }

// console.log(MaxNum(2, 99, 7))
setInterval(myTimer, 1000)

function myTimer() {
  const date = new Date()
  document.getElementById("demo").innerHTML = date.toLocaleTimeString()
}