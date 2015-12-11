var song;

function preload() {
  song = loadSound('assets/kygo_wait.mp3');
}

function setup () {
  song.play();
  width = 1280;
  height = 800;
  createCanvas(width, height);
  background(0);
  amp = new p5.Amplitude();
}

function draw () {
  var level = amp.getLevel();
  var size = map(level, 0, 1, 0, 800);
  var col = map(level, 0, 1, 0, 255);
  var f = color(0, 0, col*2);
  var s = color(0, 0, col*1.5);

  fill(f);
  stroke(s);
  
  rect(0, 0, level*1000, 100);
  ellipse(width/2, height/2, size*2, size*2);
}

function mousePressed() {
  if ( song.isPlaying() ) {
    song.pause();
  } else {
    song.play();
  }
}
