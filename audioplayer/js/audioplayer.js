let audioPlayer = document.getElementById("audio-player")
let progressBar = document.getElementById("progressBar")
let timer = document.querySelector(".audio-player-wrapper__timer")

// controls
let playBtn = document.querySelector(".audio-player-wrapper__play")
// let pauseBtn = document.querySelector(".audio-player-wrapper__pause")
let skipPrev = document.querySelector(".audio-player-wrapper__skipPrev")
let skipNext = document.querySelector(".audio-player-wrapper__nextSkip")

document.addEventListener("DOMContentLoaded", () => {
  audioPlayer.addEventListener("timeupdate", () => {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100
    progressBar.value = progress

    // calculating the the total time
    let totalSeconds = Math.floor(audioPlayer.duration)
    let minutes = Math.floor(totalSeconds / 60)
    let seconds = totalSeconds % 60

    // Calculating the minutes, seconds based on real time update
    let changeTotalSeconds = Math.floor(audioPlayer.currentTime)
    let changeMinutes = Math.floor(changeTotalSeconds / 60)
    let changeSeconds = changeTotalSeconds % 60

    timer.innerHTML = ` ${changeMinutes
      .toString()
      .padStart(2, "0")}:${changeSeconds
      .toString()
      .padStart(2, "0")}  / ${minutes}: ${seconds.toString().padStart(2, "0")}`
  })

  audioPlayer.addEventListener("play", () => {
    // changing the icons based on play and pause behavior of the audio
    playBtn.innerHTML = `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-pause"
        viewBox="0 0 16 16"
      >
        <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5" />
      </svg>
    `

    // if audio is playing and we click on playBtn, this event is call.
    playBtn.addEventListener("click", () => {
      audioPlayer.pause()
    })
  })

  audioPlayer.addEventListener("pause", () => {
    // changing the icon based on play and pause functionality
    playBtn.innerHTML = `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-play-fill"
        viewBox="0 0 16 16"
      >
        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
      </svg>
    `

    // this call if audio is pause
    playBtn.addEventListener("click", () => {
      audioPlayer.play()
    })
  })

  // by default it is call when we click on playBtn
  playBtn.addEventListener("click", () => {
    audioPlayer.play()
  })

  skipPrev.addEventListener("click", () => {
    audioPlayer.currentTime = Math.max(0, audioPlayer.currentTime - 10)
  })

  skipNext.addEventListener("click", () => {
    audioPlayer.currentTime = Math.max(0, audioPlayer.currentTime + 10)
  })
})
