// Create an array. Remove 3 elements starting from index 4, and insert 5 new elements at that position using the appropriate method.

let fruits = [
  "orange",
  "apple",
  "mango",
  "grapes",
  "pineaples",
  "watermelon",
  "guava",
  "kiwi",
  "strawberry",
]
// removing the three elements from the fruits array.
fruits.pop() //this remove n-1 element
fruits.pop() // this remove n-2 element
fruits.pop() // this remove n-3 element

// or we can use splice() to remove the element from an array.
console.table(fruits)

// adding the element from index 4

fruits.splice(4, 0, "newFruit1", "newFruit2", "newFruit3") //starting from index 4 and remove 0 element from the array.
console.table(fruits)
