// Display "Loading..." on the screen so we see something's happening
function preload(){
  table = loadTable('assets/min_EBE_data.csv', 'csv', 'header');
}

// In this sketch everything happens in setup
function setup() {
  createCanvas(windowWidth, windowHeight);
    translate(40,40);

  loadData();
}

function loadData() {
	var contractValue = table.getColumn("Job_Exp1_Value_of_Contract");
}

function draw() {
  background(127);
  // Draw a circle
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127);
  ellipse(360, 200, 200, 200);
}

// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the circle
  var d = dist(mouseX, mouseY, 360, 200);
  if (d < 100) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
  }
}