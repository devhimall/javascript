// Select the DOM container
const domContainer = document.querySelector(".dom")

// Create a wrapper div
const newDiv = document.createElement("div")
newDiv.classList.add("dom__wrapper")

// Create a box div
const div1 = document.createElement("div")
div1.classList.add("dom__box")
div1.textContent = "box"

// Append the box to the wrapper
newDiv.appendChild(div1)

// checking if domcontainer is there or not.
if (domContainer) {
  domContainer.appendChild(newDiv)
} else {
  console.error("Container not found.")
}
