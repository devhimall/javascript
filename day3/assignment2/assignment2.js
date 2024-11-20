let minute = document.querySelector("#minutes")
let second = document.querySelector("#seconds")
let milisecond = document.querySelector("#miliseconds")

let start = document.querySelector("#container__start")
let pause = document.querySelector("#container__pause")
let reset = document.querySelector("#container__reset")

let min = 0
let sec = 0
let milisec = 0

let interval

// adding the event listener to the buttons
start.addEventListener("click", startTimer)
pause.addEventListener("click", pauseTimer)
reset.addEventListener("click", resetTimer)

// start timer function
function startTimer() {
  interval = setInterval(updateTimer, 10)
  start.disabled = true
}

// stop timer function
function stopTimer() {
  clearInterval(interval)
  resetTimerData()
  start.disabled = true
}

// pause function
function pauseTimer() {
  clearInterval(interval)
  start.disabled = false
}

// reset
function resetTimer() {
  clearInterval(interval)
  resetTimerData()
  start.disabled = false
}

// conditionally updating the time.
function updateTimer() {
  milisec++
  if (milisec === 100) {
    milisec = 0
    sec++
    if (sec === 60) {
      sec = 0
      min++
    }
  }

  milisecond.textContent = milisec.toString().padStart(2, "0")
  second.textContent = sec.toString().padStart(2, "0")
  minute.textContent = min.toString().padStart(2, "0")
}

// reseting the min, sec, and milisec to zero.
function resetTimerData() {
  min = 0
  sec = 0
  milisec = 0

  milisecond.textContent = "00"
  second.textContent = "00"
  minute.textContent = "00"
}
