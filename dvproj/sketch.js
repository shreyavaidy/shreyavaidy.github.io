var fontUltra, fontReady = false;

function fontRead(){
    fontReady = true;
}

function preload() {
  fontUltra = loadFont("./assets/Ultra.ttf",fontReady);
}
function setup() {
  createCanvas(1040, 580);
}

function draw() {

  background('#fad3d1');
  textfont('fontUltra');
  textSize(32);
  fill('red');
  text('<3 Visualization',10,60);
  
  fill(51);
  quad(58, 151, 106, 120, 89, 203, 50, 236);

  fill(255, 204, 0);
  triangle(158, 120, 186, 175, 130, 175);
}