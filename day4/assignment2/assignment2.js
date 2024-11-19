function debounce(func, delay) {
  let timeout
  return function (...args) {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), delay)
  }
}

let message = document.querySelector(".debounce")

window.addEventListener(
  "resize",
  debounce((event) => {
    alert("Hello, Window is resized.")
    message.innerHTML = "Hello, Window is resized."
  }, 300)
)
