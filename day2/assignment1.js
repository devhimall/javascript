function isEven(num) {
  let evenNumbers = []
  for (let i = 1; i <= num; i++) {
    if (i % 2 == 0) {
      evenNumbers.push(i)
    }
  }
  return evenNumbers
}

// calling function and function returns an array of even numbers. so we to loop through it.
var even = isEven(100)
// printing the array of even numbers.
console.log(even)

// consoling each even number using for each loop.
even.forEach((e) => {
  console.log(e)
})
