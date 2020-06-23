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
    scale: 20
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

// spoiler
const spoiler = (() => {
  const root = document.querySelector('.js-spoiler');

  if (root !== undefined && root !== null) {
    const elements = (root) ? [...root.querySelectorAll('.js-spoiler-toggle')] : [];

    elements.forEach((element) => {
      element.addEventListener('click', (e) => {
        e.preventDefault();
        e.currentTarget.parentNode.classList.toggle('is-active');

        return false;
      });

    });
  }
})();


$(document).mouseup(function (e) {
  let $root = $(".js-spoiler");
  if (!$root.is(e.target)
    && $root.has(e.target).length === 0) {

    $root.removeClass('is-active');
  }
});


$(".js-spoiler").swipe({
  swipeStatus: function (event, phase, direction, distance, duration, fingers) {
    if (phase == "move" && direction == "right") {
      $(".js-spoiler").addClass("is-active");
      return false;
    }
    if (phase == "move" && direction == "left") {
      $(".js-spoiler").removeClass("is-active");
      return false;
    }
  }
});

// upload image
document.getElementById('upload').addEventListener('change', readURL, true);
function readURL() {
  var file = document.getElementById("upload").files[0];
  var reader = new FileReader();
  reader.onloadend = function () {
    document.getElementById('art').style.backgroundImage = "url(" + reader.result + ")";
  }
  if (file) {
    reader.readAsDataURL(file);
  } else {
  }
}

// toolbar

// change text font-size
(function () {
  let rng = document.getElementById('myRange'),
    text = document.getElementById('arttext');
  rng.addEventListener("input",
    function () {
      text.style.fontSize = rng.value + 'px'
    });
})();

// change text align
const addHandlerBtns = () => {
  let btnLeft = document.getElementById('text-align-left'),
    btnRight = document.getElementById('text-align-right'),
    btnCenter = document.getElementById('text-align-center'),
    text = document.getElementById('arttext');
  
    btnCenter.classList.add('is-active');

    btnLeft.addEventListener('click', function (e) {
        this.classList.add('is-active');
        btnRight.classList.remove('is-active');
        btnCenter.classList.remove('is-active');

        text.style.textAlign='left';
    });
    btnRight.addEventListener('click', function (e) {
        this.classList.add('is-active');
        btnLeft.classList.remove('is-active');
        btnCenter.classList.remove('is-active');

        text.style.textAlign = 'right';
    });
    btnCenter.addEventListener('click', function (e) {
        this.classList.add('is-active');
        btnRight.classList.remove('is-active');
        btnLeft.classList.remove('is-active');

        text.style.textAlign = 'center';
    });
};

// change text color
const addHandlerToggle = () => {
  let toggleWhite = document.getElementById('toggle-white'),
    toggleBlack = document.getElementById('toggle-black'),
    toggleBtn = document.getElementById('toggle-btn'),
    text = document.getElementById('arttext');

    toggleWhite.classList.add('is-active');
    toggleBtn.classList.add('-white');

    toggleWhite.addEventListener('click', function (e) {
      this.classList.add('is-active');
      toggleBlack.classList.remove('is-active');

      toggleBtn.classList.add('-white');
      toggleBtn.classList.remove('-black');

      text.style.color = '#fff';
    });

    toggleBlack.addEventListener('click', function (e) {
      this.classList.add('is-active');
      toggleWhite.classList.remove('is-active');

      toggleBtn.classList.add('-black');
      toggleBtn.classList.remove('-white');

      text.style.color = '#000';
    });

    toggleBtn.addEventListener('click', function (e) {
      if (this.classList.contains('-white')) {
        this.classList.add('-black');
        this.classList.remove('-white');

        toggleBlack.classList.add('is-active');
        toggleWhite.classList.remove('is-active');
        
        text.style.color = '#000';
      } else if (this.classList.contains('-black')) {
        this.classList.add('-white');
        this.classList.remove('-black');

        toggleWhite.classList.add('is-active');
        toggleBlack.classList.remove('is-active');

        text.style.color = '#fff';
      }
      
      
    });

};
addHandlerBtns();
addHandlerToggle();

