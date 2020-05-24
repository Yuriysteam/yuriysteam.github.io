let button;
let gifLength = 180;

var mic;
var canvas;

function setup() {
    var p5Canvas = createCanvas(600, 400);
    canvas = p5Canvas.canvas;
    background (0);
    
    mic = new p5.AudioIn();
    mic.start();
    
    button = createButton('Start');
    button.mousePressed(userStartAudio);
    capturer.start();
}


function draw () {
    background(0);
   
    
    var vol = mic.getLevel();
    fill(255, 255, 255);
    ellipse (300,200, vol*2000, vol*2000);
    console.log(vol);
    
    if (frameCount < gifLength) {
        
    capture.capture (canvas);
    }
    else if (frameCount === gifLength) {
      capture.stop();
      capture.safe();
    }
    
}