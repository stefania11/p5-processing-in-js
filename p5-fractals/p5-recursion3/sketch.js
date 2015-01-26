function setup() {
  createCanvas(1240,860);  
}

function draw() {
  background(150);
  drawCircle(width/2,height/2,400); 
  noLoop();
}

// Recursive function
function drawCircle(x,y,r) {
  stroke(0, 255, 200); //color circle
  noFill();
  ellipse(x, y, r, r);
  if(r > 8) {
    // Now we draw 4 circles, one to the left
    // and one to the right, one above and one below 
    drawCircle(x + r/2, y, r/2);
    drawCircle(x - r/2, y, r/2);
    drawCircle(x , y + r/2, r/2);
    drawCircle(x, y - r/2, r/2);

  }
}