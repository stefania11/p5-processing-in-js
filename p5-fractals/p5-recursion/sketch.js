function setup(){
	createCanvas(640,360);
}
function draw(){
	background(100);
	drawCircle(width/2,height/2,width);
	noLoop();
}

function drawCircle(x,y,r) {
  stroke(200, 240, 205); //color circle
  noFill();
  ellipse(x, y, r, r);
  // Exit condition, stop when radius is too small
  if(r > 20) {
    r *= 0.75;
    // Call the function inside the function! (recursion!)
    drawCircle(x, y, r);   
  }       
  }