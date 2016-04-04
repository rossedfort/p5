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
  peaks = song.getPeaks([width]);
  amp = new p5.Amplitude();
  length = song.duration();
}

function draw () {
  noStroke();
  for (var i = 0; i < peaks.length; i++) {
    fill(i, 0, 0);
    rect(i+2, height, 10, peaks[i]*1000);
  }
  for (var i = 0; i < 238; i++) {
    sec = second();
    ellipse(sec, 50, 2, 2)
  }
}

function mousePressed() {
  if ( song.isPlaying() ) {
    song.pause();
  } else {
    song.play();
  }
}
