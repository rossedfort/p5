position = 0
z = 30
y = 30*2
x = 30*3
w = 30*4
v = 30*5
u = 30*6
t = 30*7
s = 30*8
r = 30*9
q = 30*10
p = 30*11
o = 30*12
n = 30*13
m = 30*14
l = 30*15
k = 30*16
j = 30*17
i = 30*18
h = 30*19
g = 30*20
f = 30*21
e = 30*22
d = 30*23
c = 30*24
b = 30*25
a = 29*26
level = 0
var word = new Array ()

function setup() {
  createCanvas(1400, 780);
  stroke(170);
  textSize(40);
  strokeWeight(5);
  width = 1400;
  height = 780;
  background(0);
  frameRate(10);
  textFont("Helvetica");
}

function draw() {
  if (key == 'a') {
   line(position, a, position+50, a);
   position += 50;
   append(word, key)
   message = join(word, "")
   text(message, 50, 50)
  }
  else if (key == 'b') {
    line(position, b, position+50, b);
    position += 50;
    append(word, key)
    message = join(word, "")
    text(message, 50, 50)
  }
  else if (key == 'c') {
    line(position, c, position+50, c);
    position += 50;
    append(word, key)
    message = join(word, "")
    text(message, 50, 50)
  }
  else if (key == 'd') {
    line(position, d, position+50, d);
    position += 50;
    append(word, key)
    message = join(word, "")
    text(message, 50, 50)
  }
  else if (key == 'e') {
    line(position, e, position+50, e);
    position += 50;
    append(word, key)
    message = join(word, "")
    text(message, 50, 50)
  }
  else if (key == 'f') {
    line(position, f, position+50, f);
    position += 50;
    append(word, key)
    message = join(word, "")
    text(message, 50, 50)
  }
  else if (key == 'g') {
    line(position, g, position+50, g);
    position += 50;
    append(word, key)
    message = join(word, "")
    text(message, 50, 50)
  }
  else if (key == 'h') {
    line(position, h, position+50, h);
    position += 50;
    append(word, key)
    message = join(word, "")
    text(message, 50, 50)
  }
  else if (key == 'i') {
    line(position, i, position+50, i);
    position += 50;
    append(word, key)
    message = join(word, "")
    text(message, 50, 50)
  }
  else if (key == 'j') {
    line(position, j, position+50, j);
    position += 50;
    append(word, key)
    message = join(word, "")
    text(message, 50, 50)
  }
  else if (key == 'k') {
    line(position, k, position+50, k);
    position += 50;
    append(word, key)
    message = join(word, "")
    text(message, 50, 50)
  }
  else if (key == 'l') {
    line(position, l, position+50, l);
    position += 50;
    append(word, key)
    message = join(word, "")
    text(message, 50, 50)
  }
  else if (key == 'm') {
    line(position, m, position+50, m);
    position += 50;
    append(word, key)
    message = join(word, "")
    text(message, 50, 50)
  }
  else if (key == 'n') {
    line(position, n, position+50, n);
    position += 50;
    append(word, key)
    message = join(word, "")
    text(message, 50, 50)
  }
  else if (key == 'o') {
    line(position, o, position+50, o);
    position += 50;
    append(word, key)
    message = join(word, "")
    text(message, 50, 50)
  }
  else if (key == 'p') {
    line(position, p, position+50, p);
    position += 50;
    append(word, key)
    message = join(word, "")
    text(message, 50, 50)
  }
  else if (key == 'q') {
    line(position, q, position+50, q);
    position += 50;
    append(word, key)
    message = join(word, "")
    text(message, 50, 50)
  }
  else if (key == 'r') {
    line(position, r, position+50, r);
    position += 50;
    append(word, key)
    message = join(word, "")
    text(message, 50, 50)
  }
  else if (key == 's') {
    line(position, s, position+50, s);
    position += 50;
    append(word, key)
    message = join(word, "")
    text(message, 50, 50)
  }
  else if (key == 't') {
    line(position, t, position+50, t);
    position += 50;
    append(word, key)
    message = join(word, "")
    text(message, 50, 50)
  }
  else if (key == 'u') {
    line(position, u, position+50, u);
    position += 50;
    append(word, key)
    message = join(word, "")
    text(message, 50, 50)
  }
  else if (key == 'v') {
    line(position, v, position+50, v);
    position += 50;
    append(word, key)
    message = join(word, "")
    text(message, 50, 50)
  }
  else if (key == 'w') {
    line(position, w, position+50, w);
    position += 50;
    append(word, key)
    message = join(word, "")
    text(message, 50, 50)
  }
  else if (key == 'x') {
    line(position, x, position+50, x);
    position += 50;
    append(word, key)
    message = join(word, "")
    text(message, 50, 50)
  }
  else if (key == 'y') {
    line(position, y, position+50, y);
    position += 50;
    append(word, key)
    message = join(word, "")
    text(message, 50, 50)
  }
  else if (key == 'z') {
    line(position, z, position+50, z);
    position += 50;
    append(word, key)
    message = join(word, "")
    text(message, 50, 50)
  }
  else if (key == 'space') {
    stroke(0);
    line(position, z, position+50, z);
  }
}

function mousePressed() {
  background(0);
  position = 0;
  word = new Array ()
}
