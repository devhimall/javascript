let result = document.querySelector(".result")
let btn = document.querySelector(".throttling__button")

function throttling(func, delay = 10) {
  let isWaiting = false
  let count = 0
  return function executedFunction(...args) {
    if (!isWaiting) {
      func.apply(this, args)
      isWaiting = true
      count++
      result.innerHTML = `The button is clicked ${count} times`
      setTimeout(() => {
        isWaiting = false
      }, delay)
    }
  }
}

btn.addEventListener(
  "click",
  throttling(() => {}, 1000)
)
