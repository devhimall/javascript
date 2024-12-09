const canvas = document.getElementById("bubbleCanvas")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height =350

// Bubble class for handling each bubble's properties
class Bubble {
  constructor(x, y, radius, speedX, speedY, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.speedX = speedX
    this.speedY = speedY
    this.color = color
  }

  // Update the bubble's position and handle collision
  update(bubbles) {
    this.x += this.speedX
    this.y += this.speedY

    // Check for collision with the left and right edges and reverse the direction
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.speedX = -this.speedX // Reverse direction on collision with edges
    }

    // Check for collision with the top and bottom edges
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.speedY = -this.speedY // Bounce vertically without resetting
    }

    // Check for collision with other bubbles
    for (let i = 0; i < bubbles.length; i++) {
      if (this === bubbles[i]) continue

      let dx = this.x - bubbles[i].x
      let dy = this.y - bubbles[i].y
      let distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < this.radius + bubbles[i].radius) {
        this.speedX = -this.speedX
        this.speedY = -this.speedY
        this.color = getRandomColor()
      }
    }
  }

  // Draw the bubble
  draw() {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fillStyle = this.color
    ctx.fill()
    ctx.closePath()
  }
}

// Function to get random color
function getRandomColor() {
  const letters = "0123456789ABCDEF"
  let color = "#"
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

// Initialize bubbles
let bubbles = []
for (let i = 0; i < 6; i++) {
  let radius = Math.random() * 30 + 10 // Bubble size between 10px and 40px
  let x = Math.random() * canvas.width
  let y = Math.random() * canvas.height
  let speedX = (Math.random() - 0.5) * 3
  let speedY = (Math.random() - 0.5) * 3
  let color = getRandomColor()
  bubbles.push(new Bubble(x, y, radius, speedX, speedY, color))
}

// Animation loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  for (let bubble of bubbles) {
    bubble.update(bubbles)
    bubble.draw()
  }
  requestAnimationFrame(animate)
}

animate()
