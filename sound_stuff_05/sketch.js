function preload(){
  sound = loadSound('../assets/kygo_wait.mp3');
}

function setup(){
  createCanvas(1600, 900);
  sound.play();
  amp = new p5.Amplitude();
}

function draw(){
  background(0);
  noFill();
  var ampLevel = amp.getLevel();
  var ampLevelWidth = map(ampLevel, .4, 1, 80, 1000)
  var ampLevelHeight = map(ampLevel, 0, 1, 50, 100)
  var ampLevelRotate = map(ampLevel, 0, .4, 0, 900)
  var ampLevelScale = map(ampLevel, 0, .7, 800, 600)
  var ampLevelColor1 = map(ampLevel, 0, .4, 0, 255)
  var ampLevelColor2 = map(ampLevel, 0, .4, 0, 100)
  var ampLevelColor3 = map(ampLevel, 0, .4, 255, 0)
  var ampLevelStroke = map(ampLevel, .05, .4, 3, .085)
  var ampLevelStroke2 = map(ampLevel, .05, .4, .08, 20)
  var ampLevelRed = map(ampLevel, .40, .6, 230, 255);
  var ampLevelGreen = map(ampLevel, 0, .47, 255, 0);
  var ampLevelBlue = 0;

  if (ampLevel < .05) {
   var ampLevelRed = map(ampLevel, 0, .05, 0, 150);
  } else if (.05 < ampLevel < .4) {
   var ampLevelRed = map(ampLevel, .05, .4, 150, 255);
  }

  if (ampLevel > .42) {
   var ampLevelGreen = 0;
  } else if ( 0 < ampLevel < .03) {
   var ampLevelGreen = map(ampLevel, 0, .03, 60, 255);
  }

  if (ampLevel < .03) {
   var ampLevelBlue = map(ampLevel, 0, .03, 255, 0);
  }

  if (ampLevel < .4) {
   var ampLevelWidth = map(ampLevel, 0, .3, 10, 80);
  }

  if (ampLevel < .020) {
   var ampLevelStroke = map(ampLevel, 0, .05, 6, 3);
  }

  strokeWeight(ampLevelStroke);
  stroke(ampLevelRed, ampLevelGreen, ampLevelBlue);

  bezier(200, height, 10, ampLevelWidth*10, 1590, ampLevelWidth*10, 1400, height);
  bezier(200, height, 10, ampLevelWidth*12, 1590, ampLevelWidth*12, 1400, height);
  bezier(200, height, 10, ampLevelWidth*14, 1590, ampLevelWidth*14, 1400, height);
  bezier(200, height, 10, ampLevelWidth*16, 1590, ampLevelWidth*16, 1400, height);
  bezier(200, height, 10, ampLevelWidth*18, 1590, ampLevelWidth*18, 1400, height);
  bezier(200, height, 10, ampLevelWidth*20, 1590, ampLevelWidth*20, 1400, height);
  bezier(200, height, 10, ampLevelWidth*22, 1590, ampLevelWidth*22, 1400, height);
  bezier(200, height, 10, ampLevelWidth*24, 1590, ampLevelWidth*24, 1400, height);
  bezier(200, height, 10, ampLevelWidth*26, 1590, ampLevelWidth*26, 1400, height);

  bezier(200, 0, 10, ampLevelWidth*10, 1590, ampLevelWidth*10, 1400, 0);
  bezier(200, 0, 10, ampLevelWidth*12, 1590, ampLevelWidth*12, 1400, 0);
  bezier(200, 0, 10, ampLevelWidth*14, 1590, ampLevelWidth*14, 1400, 0);
  bezier(200, 0, 10, ampLevelWidth*16, 1590, ampLevelWidth*16, 1400, 0);
  bezier(200, 0, 10, ampLevelWidth*18, 1590, ampLevelWidth*18, 1400, 0);
  bezier(200, 0, 10, ampLevelWidth*20, 1590, ampLevelWidth*20, 1400, 0);
  bezier(200, 0, 10, ampLevelWidth*22, 1590, ampLevelWidth*22, 1400, 0);
  bezier(200, 0, 10, ampLevelWidth*24, 1590, ampLevelWidth*24, 1400, 0);
  bezier(200, 0, 10, ampLevelWidth*26, 1590, ampLevelWidth*26, 1400, 0);

  // bezier(200, height, 10, ampLevelHeight*10, 1590, ampLevelWidth*10, 1400, height);
  // bezier(200, height, 10, ampLevelHeight*12, 1590, ampLevelWidth*12, 1400, height);
  // bezier(200, height, 10, ampLevelHeight*14, 1590, ampLevelWidth*14, 1400, height);
  // bezier(200, height, 10, ampLevelHeight*16, 1590, ampLevelWidth*16, 1400, height);
  // bezier(200, height, 10, ampLevelHeight*18, 1590, ampLevelWidth*18, 1400, height);
  // bezier(200, height, 10, ampLevelHeight*20, 1590, ampLevelWidth*20, 1400, height);
  // bezier(200, height, 10, ampLevelHeight*22, 1590, ampLevelWidth*22, 1400, height);
  // bezier(200, height, 10, ampLevelHeight*24, 1590, ampLevelWidth*24, 1400, height);
  // bezier(200, height, 10, ampLevelHeight*26, 1590, ampLevelWidth*26, 1400, height);
  // bezier(200, height, 10, ampLevelHeight*28, 1590, ampLevelWidth*28, 1400, height);
}
