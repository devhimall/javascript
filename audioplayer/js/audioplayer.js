let audioPlayer = document.getElementById("audio-player")
let progressBar = document.getElementById("progressBar")
let timer = document.querySelector(".audio-player-wrapper__timer")
let audioPlayerWrapper = document.querySelector(".audio-player-wrapper")

// controls
let playBtn = document.querySelector(".audio-player-wrapper__play")
let skipPrev = document.querySelector(".audio-player-wrapper__skipPrev")
let skipNext = document.querySelector(".audio-player-wrapper__nextSkip")

document.addEventListener("DOMContentLoaded", () => {
  // Update progress bar as the audio plays
  audioPlayer.addEventListener("timeupdate", () => {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100
    progressBar.value = progress

    // Calculate total time and current time
    let totalSeconds = Math.floor(audioPlayer.duration || 0)
    let minutes = Math.floor(totalSeconds / 60)
    let seconds = totalSeconds % 60

    let currentSeconds = Math.floor(audioPlayer.currentTime || 0)
    let currentMinutes = Math.floor(currentSeconds / 60)
    let currentDisplaySeconds = currentSeconds % 60

    timer.innerHTML = `${currentMinutes
      .toString()
      .padStart(2, "0")}:${currentDisplaySeconds
      .toString()
      .padStart(2, "0")} / ${minutes}:${seconds.toString().padStart(2, "0")}`
  })

  // Play and pause functionality
  playBtn.addEventListener("click", () => {
    if (audioPlayer.paused) {
      audioPlayer.play()
    } else {
      audioPlayer.pause()
    }
  })

  // Update play/pause button icon
  audioPlayer.addEventListener("play", () => {
    playBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause" viewBox="0 0 16 16"><path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5" /></svg>`
  })

  audioPlayer.addEventListener("pause", () => {
    playBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" /></svg>`
  })

  // Skip functionality
  skipPrev.addEventListener("click", () => {
    audioPlayer.currentTime = Math.max(0, audioPlayer.currentTime - 10)
  })

  skipNext.addEventListener("click", () => {
    audioPlayer.currentTime = Math.min(
      audioPlayer.duration,
      audioPlayer.currentTime + 10
    )
  })

  // Dragging progress bar
  progressBar.addEventListener("input", (e) => {
    const newTime = (progressBar.value / 100) * audioPlayer.duration
    audioPlayer.currentTime = newTime
  })

  // Update progress bar and handle drag
  progressBar.addEventListener("mousedown", () => {
    audioPlayer.pause() // Pause audio while dragging
  })

  progressBar.addEventListener("mouseup", () => {
    audioPlayer.play() // Resume audio after dragging
  })
})
