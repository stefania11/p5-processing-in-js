function setup() {
  createCanvas(1240,860);  
}

function draw() {
  background(150);
  drawCircle(width/2,height/2,550); 
  noLoop();
}

// Recursive function
function drawCircle(x,y,r) {
  stroke(0, 255, 200); //color circle
  noFill();
  ellipse(x, y, r, r);
  if(r > 2) {
    // Now we draw two more circles, one to the left
    // and one to the right until the radius is smaller than 2
    drawCircle(x + r/2, y, r/2);
    drawCircle(x - r/2, y, r/2);
  }
}