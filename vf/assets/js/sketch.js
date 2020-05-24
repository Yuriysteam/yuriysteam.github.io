let mic;

var div, start_button;

 function setup(){
    noCanvas();
     
    div = createDiv("ПОЕХАЛИ");
    div.attribute('contenteditable', 'true')
    div.addClass('name');
    
    
     
     
    start_button = createDiv('ПУСК');
    start_button.addClass('start');
    start_button.mousePressed(userStartAudio);
     mic = new p5.AudioIn();
    mic.start();
     
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}



function draw() {
    
    
   micLevel = mic.getLevel();
    

  // weightControl = sin(frameCount/1.0)*100;
   div.elt.style['font-variation-settings'] = `"wght" ${micLevel*10000}, "wdth" ${micLevel*1000}`;
   
    
    
   console.log(micLevel);
}



