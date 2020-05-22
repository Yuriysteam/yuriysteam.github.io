let mic;
var paragraph;

 function setup(){
  let cnv = createCanvas(windowWidth, windowHeight);
     cnv.style('display', 'block'); 
     cnv.mousePressed(userStartAudio);
     
     paragraph = createP("Click and speak");
     mic = new p5.AudioIn();
     mic.start();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}



function draw(){
    
    micLevel = mic.getLevel();

weightControl = sin(frameCount/10.0)*100+150;
  paragraph.elt.style['font-variation-settings'] = `"wght" ${micLevel*10000}, "wdth" ${micLevel*10000}`;
  paragraph.position(10, -200);
    
   console.log(micLevel);
}


