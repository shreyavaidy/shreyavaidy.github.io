var data = [];
var data_in = []
var maxData;

//Uploading the file as a txt to generate world cloud
function preload() {
  inputtext = loadStrings('posneg.txt');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(BOTTOM);

  data_in = inputtext;
  //console.log(data_in[0]);

  for (var i = 0; i < 100; i = i + 1) {
    var randomNumber = random(20, 50);
    data.push(randomNumber);
  }
  maxData = data.length;
  //console.log(maxData);

  button1 = createButton('>');
  button1.position(100, 150);
  button1.mousePressed(nextState);

  button2 = createButton('<');
  button2.position(50, 150);
  button2.mousePressed(backState);
}

function backState() {
  window.location.href = "chart3.html";
}

function nextState() {
  window.location.href = "finaldemo.html#app";
}

function draw() {
  background('#fafae5');
  fill(139, 171, 203);
  fill('#836953');
  noStroke();

  push();
  fill('#252525');
  textStyle(BOLD);
  textSize(35);
  textFont('Arial');
  text('How did these words get scored?', 150, 100);
  pop();

  text('All phrases from our document have been grouped with their positive or negative sentiment score', 200, 120);

  var angleSeparation = 360 / data_in.length;
  var padding = 10;

  if (frameCount <= 400) {
    maxValue = constrain(frameCount * 2, 0, 400);
  } else {
    maxValue = 400;
  }
  var offset = 200;
  var dataMultiplier = (height/2-offset-padding) / 20;


  for (var i = 0; i < data_in.length; i = i + 1) {
    push();
    var currentData = data[i];
    var current_score = data_in[i];
    //console.log(current_score);

    var finalHeight = currentData * dataMultiplier;
    var animatedHeight = map(maxValue, 0, 800, 0, 200);
    translate(width / 2, height / 2);
    rotate(angleSeparation * i);
    rect(0, offset-100, angleSeparation*1, animatedHeight);
    textStyle(BOLD);
    textFont(20);
    
    fill('#245F4B');
    if(i>=11 && i<44){
      fill('#E53935');
    }
    text(current_score, offset, 0);
    pop();
  }
}
