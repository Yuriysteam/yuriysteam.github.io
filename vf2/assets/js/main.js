let mic;
var paragraph;

 function setup(){
  let cnv = createCanvas(windowWidth, windowHeight);
     cnv.style('display', 'block'); 
     cnv.mousePressed(userStartAudio);
     
     paragraph = createP("НАЖМИ И АААААА");
     mic = new p5.AudioIn();
     mic.start();
     
     pixelDensity = 1;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}



function draw(){
    
    micLevel = mic.getLevel();

weightControl = sin(frameCount/10.0)*100+150;
  paragraph.elt.style['font-variation-settings'] = `"wght" ${micLevel*25000}, "wdth" ${micLevel*5000}`;
  paragraph.position(10, -200);
    
    
   console.log(micLevel);
}


