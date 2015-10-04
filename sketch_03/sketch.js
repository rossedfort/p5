function setup() {
  width = 1400
  height = 780
  createCanvas(width, 780);
  background(0);
  x = 0
  y = height/2
}

function draw() {

  if (mouseIsPressed) {
    noLoop();
  }

  stroke(170)
  strokeWeight(5);

  point(x,y)

  x+=1

  if (keyIsPressed == true) {
    y = random(height)
  }
}
