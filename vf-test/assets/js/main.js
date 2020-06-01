//list the inputs and open the third one
// var motu = new Tone.UserMedia();

//opening the input asks the user to activate their mic
// motu.open().then(function(){
// 	//promise resolves when input is available
// });

let animationFrames = []
let startRecordingTimerId = null

function recordingInvoker() {
  if (startRecordingTimerId) {
    stopRecording()
    return
  }

  startRecording()
}

function saveSnapShotInMemory() {
  html2canvas(document.querySelector('.art'), {
    scale: 50
  }).then(canvas => {
    animationFrames.push(canvas.toDataURL('image/png'))
  })
}

function downloadBase64File(linkSource, fileName) {
  const downloadLink = document.createElement('a')
  document.body.appendChild(downloadLink)

  downloadLink.href = linkSource
  downloadLink.target = '_self'
  downloadLink.download = fileName
  downloadLink.click()
}

function startRecording() {
  startRecordingTimerId = window.setInterval(() => {
    saveSnapShotInMemory()
  }, 50)
}

function stopRecording() {
  // stop recording
  if (startRecordingTimerId) {
    clearTimeout(startRecordingTimerId)
    startRecordingTimerId = null
  }

  // Create the gif animation from animationFrames array
  gifshot.createGIF({
    images: animationFrames,
    numWorkers: 2
  }, function (obj) {
    if (!obj.error) {
      downloadBase64File(obj.image, 'animation.gif')
    }
  })
}
