// Define Array and objects and console them with appropriate console tools.

// Defining an array
let OutsideTrainees = ["Himal", "Sharad", "Krisha", "Sushil", "Narayan"]

// Define and Declaring an object
let TraineeObject = [
  {
    name: "himal tamang",
    address: "Boudha",
    contact: "9823094809273",
    company: "outside",
    college: "Kings",
    hobby: "Playing football",
  },
  {
    name: "Sharad",
    address: "Boudha",
    contact: "9823094809273",
    company: "outside",
    college: "Kings",
    hobby: "Playing football",
  },
  {
    name: "Sushil",
    address: "Boudha",
    contact: "9823094809273",
    company: "outside",
    college: "Kings",
    hobby: "Playing football",
  },
  {
    name: "Krisha",
    address: "Boudha",
    contact: "9823094809273",
    company: "outside",
    college: "Kings",
    hobby: "Playing football",
  },
]

// array of trainees
console.log("Outside Web Trainees")
console.log(OutsideTrainees)
console.table(OutsideTrainees)
console.group("Showing detail in group")
console.log(OutsideTrainees[0])
console.log(OutsideTrainees[2])
console.log(OutsideTrainees[3])
console.groupEnd()

// console log of object
console.log("Object Consoles")
console.table(TraineeObject)
console.dir(TraineeObject)
console.log(" ")
console.log("Displaying the detail in group")
console.log(" ")
TraineeObject.forEach((element) => {
  console.groupCollapsed("Person Details")
  console.log(`Name: ${element.name}`)
  console.log(`Age: ${element.address}`)
  console.log(`Profession: ${element.company}`)
  console.log(`Hobbies: ${element.hobby}`)
  console.groupEnd()
})
