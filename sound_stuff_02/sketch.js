var song;

function preload() {
  // song = loadSound('assets/kygo_wait.mp3');
  song = loadSound('../assets/skinny_love.mp3');
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

  fill(0, 0, col*2);
  stroke(0, 0, col*1.5);
  ellipse(width/2, height/2, size*2, size*2);
}

function mousePressed() {
  if ( song.isPlaying() ) {
    song.pause();
  } else {
    song.play();
  }
}
