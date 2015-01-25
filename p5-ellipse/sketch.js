//Example of P5 Ellipse drawing done by Stefania Druga @stefania_druga based on the example from www.p5js.org

var ew = 60 ; // set Width of Ellipse
var eh = 60 ; //set Height of Ellipse
function setup(){
  var myCanvas = createCanvas(600,600);
  myCanvas.parent('canvas-container')
  myCanvas.class('my-canvas');
}

function draw(){
  if (mouseIsPressed) {
    fill(200, 200, 255); 
  } else {
    fill(200, 250, 200);
  }
  ellipse(mouseX,mouseY,ew,eh);
}