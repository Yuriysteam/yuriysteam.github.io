var mic;

 function setup(){
  createCanvas(200, 200);
  mic = new p5.AudioIn();
  mic.start();
}

function draw(){
  background(0);

  micLevel = mic.getLevel();
  ellipse(100, 100, micLevel*500, micLevel*500);
  
  console.log(micLevel);
}