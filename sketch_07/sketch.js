function setup()  {
  width = 1000
  height = 400
  createCanvas(width, height);
  background(0);
  size = 100
  size_two = 100
  color = 255
  noStroke();
}

function draw() {
  fill(random(color), 0, 0)
  ellipse(mouseX, mouseY, 20 , 20);

  size +=1
  size_two -=1
}
