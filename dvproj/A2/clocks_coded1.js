var cx, cy; // center position of canvas
// Radius for hands of the clock
var secondsRadius;
var minutesRadius;
var hoursRadius;
var clockDiameter;

var hour_xs = [], hour_ys = [];
var minute_xs = [], minute_ys = [];
var second_xs = [], second_ys = [];

function setup(){
  createCanvas(1240,600);
  frameRate(1);
  noStroke();

  for (var i = 0; i < 24; i++){
    append(hour_xs, random(width));
    append(hour_ys, random(height));
  }

  for (var i = 0; i < 60; i++){
    append(minute_xs, random(width));
    append(minute_ys, random(height));
  }

  for (var i = 0; i < 60; i++){
    append(second_xs, random(width));
    append(second_ys, random(height));
  }


  var radius = min(width, height) / 2; // this is the maximum possible radius
  secondsRadius = radius * 0.72;
  minutesRadius = radius * 0.60;
  hoursRadius = radius * 0.50;
  clockDiameter = radius * 1.8;

  cx = width / 2;
  cy = height / 2;
}

function drawBall(x, y, dia, k) {
  fill(k, 150); // grayscale with 150/255 transparency
  ellipse(x, y, dia, dia);
}

function draw() {
  background('#fad3d1');

  strokeWeight(2);
  for (var i = 0; i < second(); i++){
    drawBall(second_xs[i], second_ys[i], 10, 190);
  }

  strokeWeight(4);
  for (var i = 0; i < minute(); i++){
    drawBall(minute_xs[i], minute_ys[i], 25, 150);
  }

  strokeWeight(6);
  for (var i = 0; i < hour(); i++){
    drawBall(hour_xs[i], hour_ys[i], 50, 100);
  }
  // Draw the clock background
  noStroke();
  //ellipse(cx, cy, clockDiameter, clockDiameter);
  rect(cx/2, cy/4, cx, cy+cy/2,45);
  // Angles for sin() and cos() start at 3 o'clock;
  // subtract HALF_PI to make them start at the top
  var s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
  var m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
  var h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;

  // Draw the hands of the clock
  fill(144, 12, 60);
  stroke(255);
  strokeWeight(2);
  line(cx, cy, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
  strokeWeight(4);
  line(cx, cy, cx + cos(m) * minutesRadius, cy + sin(m) * minutesRadius);
  strokeWeight(6);
  line(cx, cy, cx + cos(h) * hoursRadius, cy + sin(h) * hoursRadius);

  // Draw the minute ticks
  strokeWeight(15);
  beginShape(POINTS);
  for (var a = 0; a < 360; a+=6) {
    var angle = radians(a);
    var x = cx + cos(angle) * secondsRadius;
    var y = cy + sin(angle) * secondsRadius;
    vertex(x, y);
  }
  endShape();
}