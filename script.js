window.addEventListener('load', () => {
  setTimeout(function () {
    document.querySelector('#boot').style.display = 'none'
  }, 2000)

  setTimeout(function () {
    document.querySelector('#boot-ready').style.display = 'none'
  }, 3000)

  const playButton = document.getElementById('play-and-pause')
  playButton.addEventListener('click', () => {
    playAndPauseAudio()
  })
})
function playAndPauseAudio () {
  const audio = document.getElementById('audio')
  if (audio.paused) {
    audio.play()
  } else {
    audio.pause()
  }
}
