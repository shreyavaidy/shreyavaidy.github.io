function setup() {
  createCanvas(1040, 580);
}

function draw() {
  background('#fad3d1');
  fill(51);

  var s = second();
  var m = minute();
  var h = hour();

  var time = h+":"+m+":"+s;
  text(time,900,25);

  push();  // Start a new drawing state
  textSize(32);
  fill('red');
  translate(s,0);
  text('Love Visualization',50,60);
  pop();

  push(); // Start a new drawing state
  scale(h/5, h/5); // Used h to apply scale, div 5 to keep triangle inside canvas
  fill(255, 204, 0);
  triangle(158, 120, 186, 175, 130, 175);
  pop(); // Restore original state (scale, specifically)

  // First change the mode to degrees (default is radians)
  angleMode(DEGREES);
  // Map the function m to values from 0~360
  rotate(map(m, 0, 60, 0, 360));
  quad(58, 151, 106, 120, 89, 203, 50, 236);

}