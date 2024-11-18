// Create an array.
// Remove first element
// Remove last element
// Add new element at the beginning
// Add a new element at the end
// Console log all the arrays along with the original modified array.

const sampleArray = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grape",
  "honeydew",
  "kiwi",
  "lemon",
]
console.log("original array")
console.table(sampleArray)

// removing the first element of the array
sampleArray.shift()
console.log("removing the first element")
console.log(sampleArray)

// removing the last element
sampleArray.pop()
console.log("removing the element from the last")
console.log(sampleArray)

// adding the new element add the beginning
sampleArray.unshift("guava")
console.log("adding new element at the beginning")
console.log(sampleArray)

//add new element at the end
sampleArray.push("lastelement")
console.log("adding new element at last")
console.log(sampleArray)
