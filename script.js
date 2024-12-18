window.addEventListener('load', () => {
  setTimeout(function () {
    document.querySelector('#boot').style.display = 'none'
  }, 2000)

  setTimeout(function () {
    document.querySelector('#boot-ready').style.display = 'none'
    manageStartButton()
  }, 3000)

  const playButton = document.getElementById('play-and-pause')
  playButton.addEventListener('click', () => {
    playAndPauseAudio()
  })
  window.scrollTo(0, 1)
})

window.scrollTo(0, 1)

function playAndPauseAudio () {
  const audio = document.getElementById('audio')
  if (audio.paused) {
    audio.play()
  } else {
    audio.pause()
  }
}

function manageStartButton() {
  const startButton = document.getElementById('start-button')
  const startMenu = document.getElementById('start-menu')
  const shutDownButton = document.getElementById('shutdown-button')

  if (startButton && startMenu) {
    startButton.addEventListener('click', () => {
      if (startMenu.style.display === 'block') {
        startMenu.style.display = 'none'
        return
      } else {
        startMenu.style.display = 'block'
      }
    })
  }
  if (shutDownButton) {
    shutDownButton.addEventListener('click', () => {
      window.location.reload()
    })
  }
}
