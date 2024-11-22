// Create a new array element.
// Create a new array with the multiplication of 5
// Create a new array finding the maximum number of new array (task number 4.a)
// Also list out the even numbers of both new and original array.

const arrayNumbers = [1, 2, 3, 4, 5, 20, 6, 7, 8, 9, 10, 40, 60, 90, 200]

// creating a new array that is multiple of 5
let newArrayNumbers = arrayNumbers.map((x) => x * 5)

// creating new array based on newArrayNumbers, finding the maximum number.

// ========= METHOD 1
let maxNumber = newArrayNumbers.reduce((acc, curr) => (acc > curr ? acc : curr))
let newMaxArray = []
newMaxArray.push(maxNumber)

// ======== METHOD 2
let max = 0
for (let i = 0; i < newArrayNumbers.length; i++) {
  if (max > newArrayNumbers[i]) {
    max = max
  } else {
    max = newArrayNumbers[i]
  }
}

// defining new array
let newMaxArray1 = []
newMaxArray1.push(max)
// Consoling the output
// original array
console.log("Original array: ")
console.log(arrayNumbers)

// multiple of five
console.log("Multiple of 5 array:")
console.log(newArrayNumbers)

// max array
console.log("Finding the max array element using reduce function")
console.log(newMaxArray)
// second method console
console.log("Finding the max array elemment  using loop:")
console.log(newMaxArray1)
