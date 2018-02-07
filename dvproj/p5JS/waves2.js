var xspacing = 16;  
var sxspacing = 8;  // Distance between each horizontal location
var w;                // Width of entire wave
var theta = 0.0;      // Start angle at 0
var amplitude = 45.0; // Height of wave
var period = 500.0;   // How many pixels before the wave repeats
var dx;               // Value for incrementing x
var yvalues;  // Using an array to store height values for the wave

var maxwaves = 4;   // total # of waves to add together
var stheta = 0.0;
var yoff = 0.0;     //for Noise wave

var samplitude = new Array(maxwaves);   // Height of wave
var sdx = new Array(maxwaves);         
var syvalues;                          

function setup() {
  createCanvas(1040, 600);
  frameRate(30);
  colorMode(RGB, 255, 255, 255, 100);

  for (var i = 0; i < maxwaves; i++) {
    samplitude[i] = map(minute(), 0,60, 10,30);    //setting it to change every minute
    var period = random(100,300); // Num pixels before wave repeats
    sdx[i] = (TWO_PI / period) * sxspacing;
  }

  syvalues = new Array(floor(w/sxspacing));

  w = width+16;

  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w/xspacing));
}

function draw() {
  background("#79A888");

  var s = second();
  var m = minute();
  var h = hour();

  calcWave();
  renderWave();
}

function calcWave() {
  // Increment theta (try different values for 
  // 'angular velocity' here)
  theta += 0.02;

  // For every x value, calculate a y value with sine function
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }

  var s = second();
  stheta = s; //angular velocity of the wave set to second so that it changes every second.

  // Set all height values to zero initially
  for (var i = 0; i < syvalues.length; i++) {
    syvalues[i] = 0;
  }
 
  // Accumulate wave height values
  for (var j = 0; j < maxwaves; j++) {
    var x = stheta;
    for (var i = 0; i < yvalues.length; i++) {
      // Every other wave is cosine instead of sine
      if (j % 2 == 0)  syvalues[i] += sin(x)*samplitude[j];
      else syvalues[i] += cos(x)*samplitude[j];
      x+=sdx[j];
    }
  }
}

function renderWave() {
  noStroke();
  fill(255);
  // A simple way to draw the wave with an ellipse at each location
  for (var x = 0; x < yvalues.length; x++) {
    ellipse(x*xspacing, height/2+yvalues[x], 16, 16);
  }

  fill(191, 237, 255,60);
  ellipseMode(CENTER);
  for (var x = 0; x < syvalues.length; x++) {
    ellipse(x*sxspacing,width/2+syvalues[x],10,10);
  }
}