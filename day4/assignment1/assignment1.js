const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
}

const observer = new IntersectionObserver(animation, options)

function animation(items, observer) {
  items.forEach((item) => {
    if (item.isIntersecting) {
      // Animate in when the element is visible
      item.target.classList.add("animate")
      if (item.target.classList.contains("container_item2")) {
        observer.unobserve(item.target)
      }
    } else {
      // removing the animate class for item 3 when it leaves the viewports
      if (item.target.classList.contains("container_item3")) {
        item.target.classList.remove("animate")
      }
    }
  })
}

let target = document.querySelector(".container_item2")
let target2 = document.querySelector(".container_item3")

observer.observe(target)
observer.observe(target2)
