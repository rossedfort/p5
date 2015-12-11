function setup() {
  noStroke();
  width = 600
  height = 400
  createCanvas(width, height);
  background(0);
  size = 40
  color = 255
  count = 0
}

function draw() {
    fill(random(color), random(color), random(color));
    ellipse(random(width), random(height), size, size);

    size -= 1

    if (size == 10) {
      size = 40
    }

    count += 1

    if (count == 150) {
      noLoop();
    }

}
