function setup() {
  width = 600
  height = 400
  createCanvas(width, height);
  background(0);
  color = 255
  count = 0
}

function draw() {

    stroke(255)
    line(width/2,height/2,random(width), random(height));

    stroke(random(color), random(color), random(color))
    line(width/4,height/2,random(width), random(height));
    line(3*(width/4),height/2,random(width), random(height));

    count += 1

    if (count == 150) {
      noLoop();
      count = 0
    }
}
