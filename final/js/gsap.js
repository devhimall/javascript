gsap.registerPlugin(ScrollTrigger)

// gradient colors collection
const gradients = [
  "linear-gradient(90deg, #D3F1DF, #85A98F)",
  "linear-gradient(180deg, #D3F1DF, #5A6C57)",
  "linear-gradient(45deg, #D3F1DF, #525B44)",
  "linear-gradient(135deg, #85A98F, #5A6C57)",
  "linear-gradient(360deg, #85A98F, #525B44)",
  "radial-gradient(circle, #D3F1DF, #5A6C57)",
  "radial-gradient(ellipse, #85A98F, #525B44)",
  "radial-gradient(circle at center, #5A6C57, #D3F1DF)",
]

// Popup Section

let gradientIndex = 0

function changeGradient() {
  gradientIndex = (gradientIndex + 1) % gradients.length

  gsap.to(".popup", {
    background: gradients[gradientIndex],
    duration: 1,
  })

  gsap.to("#navbar", {
    background: gradients[gradientIndex],
    duration: 0.5,
  })
}
setInterval(changeGradient, 5000)

const text = document.getElementById("popup")
const textContent = text.textContent
text.innerHTML = textContent
  .split(" ")
  .map((word) => {
    const color = gsap.utils.random([
      "#2C3E50",
      "#4A4A4A",
      "#4B6A52",
      "#3E4E43",
      "#333333",
      "#2C3E47",
    ])
    return `<span class="popup-word" style="color: ${color}">${word} </span>`
  })
  .join("")

gsap.from(".popup-word", {
  opacity: 0,
  y: 20,
  duration: 1,
  stagger: 0.5,
  ease: "power1.out",
  onComplete: () => {
    document.querySelector(".container__navbar").scrollIntoView({
      behavior: "smooth",
    })

    // Animate the navbar after scrolling
    gsap.fromTo(".container__navbar", {
      y: 0,
      duration: 2,
      ease: "power2.inOut",
    })
  },
})
// Popup Section End

// Menu Open

document.addEventListener("DOMContentLoaded", () => {
  let menu = document.querySelector(".menu")
  let navbar = document.querySelector(".navbar__list")
  let close = document.querySelector(".close")
  let tl = gsap.timeline()

  tl.to(".navbar__list", {
    right: 0,
    duration: 1.5,
  })

  tl.from(".navbar__item", {
    x: 100,
    duration: 0.8,
    stagger: 0.5,
    opacity: 0,
  })
  tl.pause()

  if (menu) {
    menu.addEventListener("click", (e) => {
      tl.play()
    })
  } else {
    console.log("menu is not")
  }

  // for closing the menu bar

  if (close) {
    close.addEventListener("click", (e) => {
      tl.reverse()
    })
  } else {
    console.log("close is not loaded.")
  }
})

// End of Menu Open

// Leadspace section
let leadspace__title = document.querySelector(".leadspace__title")
leadspace__title.innerHTML = leadspace__title.textContent
  .split(" ")
  .map((word) => {
    const color = gsap.utils.random([
      "#2C3E50",
      "#4A4A4A",
      "#4B6A52",
      "#3E4E43",
      "#333333",
      "#2C3E47",
    ])
    return `<span class="leadspace-title" style="color: ${color}">${word}</span>`
  })
  .join("<br />")

gsap.from(".leadspace-title", {
  opacity: 0,
  duration: 3,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".leadspace-title",
    start: "100 90%",
    end: "100 20%",
  },
})

gsap.from(".leadspace__subtitle", {
  x: -200,
  opacity: 0,
  duration: 3,
  delay: 2,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".leadspace__subtitle",
  },
})

gsap.from(".leadspace__cta", {
  opacity: 0,
  duration: 3,
  delay: 3,
  x: -200,
  scrollTrigger: {
    trigger: ".leadspace__cta",
  },
})

gsap.from(".trophy", {
  opacity: 0,
  x: 500,
  duration: 4,
  rotate: 360,
  delay: 4,
  scrollTrigger: {
    trigger: ".trophy",
  },
})

// End of leadspace section
