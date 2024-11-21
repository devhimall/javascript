let hours = document.querySelector(".digital-clock__hours")
let minutes = document.querySelector(".digital-clock__minutes")
let seconds = document.querySelector(".digital-clock__seconds")
let ampm = document.querySelector(".digital-clock__pm-am")

let hrs = 12
let min = 60
let sec = 0
let count = 12

setInterval(() => {
  sec >= 60
    ? min >= 60
      ? (hrs++, (min = 0), count++)
      : (min++, (sec = 0))
    : sec++

  if (hrs == 13) {
    count = 1
  }

  // checking if the time is two digit or one digit
  if (hrs < 10 && min < 10 && sec < 10 && count < 10) {
    hours.innerHTML = hrs
      ? hrs <= 24 && hrs <= 12
        ? ` 0 ${count} :`
        : `0 ${count} :`
      : 0
    minutes.innerHTML = min ? `0 ${min} :` : 0
    seconds.innerHTML = sec ? `0 ${sec} :` : 0
  } else {
    if (hrs < 10) {
      hours.innerHTML = hrs
        ? hrs <= 24 && hrs <= 12
          ? ` 0 ${count} :`
          : `0 ${count} :`
        : 0
    } else {
      hours.innerHTML = hrs
        ? hrs <= 24 && hrs <= 12
          ? ` ${count} :`
          : `${count} :`
        : 0
    }

    if (min < 10) {
      minutes.innerHTML = min ? `0 ${min} :` : 0
    } else {
      minutes.innerHTML = min ? `${min} :` : 0
    }
    if (sec < 10) {
      seconds.innerHTML = sec ? `0 ${sec} :` : 0
    } else {
      seconds.innerHTML = sec ? `${sec} :` : 0
    }
  }

  // common - applying the am and pm conditionally.
  ampm.innerHTML = hrs ? (hrs <= 24 && hrs <= 12 ? `AM ` : `PM`) : "AM /P M"
}, 1000)
