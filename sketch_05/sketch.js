function setup() {
  createCanvas(1400, 780);
  textSize(40);
  width = 1400;
  height = 780;
  frameRate(30);
  textFont("Helvetica");
  noFill();
  background(255);
  a = 255
}

function draw() {
  stroke(random(255),random(255),random(255), a);
  bezier(width/4, height/4,random(width),random(height),random(width),random(height),3*(width/4),3*(height/4))

  background(255,255,255,a)
   a -= 1

   if (a == 100) {
     a = 255
   }
}


function mousePressed() {
  noLoop();
}
