var xspacing = 8;   // Distance between each horizontal location
var w;              // Width of entire wave
var maxwaves = 4;   // total # of waves to add together
var theta = 0.0;
var yoff = 0.0;     //for Noise wave

var amplitude = new Array(maxwaves);   // Height of wave
var dx = new Array(maxwaves);         
var yvalues;                          

function setup() {
  createCanvas(1040, 600);
  frameRate(30);
  colorMode(RGB, 255, 255, 255, 100);

  w = width + 16;

  for (var i = 0; i < maxwaves; i++) {
    amplitude[i] = map(hour(), 0,60, 10,30);    //setting it to change every minute
    var period = random(100,300); // Num pixels before wave repeats
    dx[i] = (TWO_PI / period) * xspacing;
  }

  yvalues = new Array(floor(w/xspacing));
}

function draw() {
  //background("#79A888");
  background("#B4D7BF");
  
  var s = second();
  var m = minute();
  var h = hour();
  
  var time = h+":"+m+":"+s;
  textSize(22);
  fill("#213D30");
  text(time,485,25);  //setting color of time on topright corner

  fill(105,150,173,70);    //setting color of hour wave
  beginShape();

  var xoff = 0;     
  for (var x = 0; x <= width; x += 10) {
    // Calculate a y value according to noise, map to hours
    var y = map(noise(xoff, yoff), 1, 12, 300, 600);    
    //var y = minute();
    // Set the vertex
    vertex(x, y);
    xoff += 0.15;  // Increment x dimension for noise
  }
  yoff += 0.01;     // Increment y dimension for noise
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);

  calcWave();
  renderWave();
}

function calcWave() {
  
  var s = second();
  theta = s; //angular velocity of the wave set to second so that it changes every second.

  // Set all height values to zero initially
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = 0;
  }
 
  // Accumulate wave height values
  for (var j = 0; j < maxwaves; j++) {
    var x = theta;
    for (var i = 0; i < yvalues.length; i++) {
      // Every other wave is cosine instead of sine
      if (j % 2 == 0)  yvalues[i] += sin(x)*amplitude[j];
      else yvalues[i] += cos(x)*amplitude[j];
      x+=dx[j];
    }
  }
}

function renderWave() {
  // A simple way to draw the wave with an ellipse at each location
  noStroke();
  //fill(255,50);
  fill(191, 237, 255,60);
  ellipseMode(CENTER);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse(x*xspacing,width/2+yvalues[x],10,10);
  }
}