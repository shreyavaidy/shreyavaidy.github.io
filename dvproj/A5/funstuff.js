// Demonstration of multiple force acting on bodies (Mover class)
// Here forces have been reinterpreted as the hour and minute hitting them and affecting the movement


var hands = [];

// Liquid
var liquid;

function setup() {
  createCanvas(1200, 500);
  reset();
  // Create liquid object - treat like an hour bubble of filter through which hands enter and start moving slower
  liquid = new Liquid(width/3, height/2, width/2, height/2, 0.1);
  frameRate(30);
}

function draw() {
  //background("#fdd7d0");
  background("#FDDCB1");
  
  noStroke();

  var s = second();
  var m = minute();
  var h = hour();
  var time = h+":"+m+":"+s;

  liquid.display();
  fill("#ccaaa2");

  console.log(hands.length);
  
  for (var i = 0; i < hands.length; i++) {

    // Is the Mover in the liquid?
    if (liquid.contains(hands[i])) {
      // Calculate drag force
      var dragForce = liquid.calculateDrag(hands[i]);
      // Apply drag force to Mover
      hands[i].applyForce(dragForce);
    }

    // Gravity is scaled by mass here!
    var gravity = createVector(0, 0.1*hands[i].mass);
    // Apply gravity
    hands[i].applyForce(gravity);

    // Update and display
    hands[i].update();
    hands[i].display();
    hands[i].checkEdges();
  }

}


function mousePressed() {
  reset();
}

// Restart all the hands of the clock randomly
function reset() {
  for (var i = 0; i < 9; i++) {
    hands[i] = new Mover(random(0.5, 3), 40+i*70, 0);
  }
}

var Liquid = function(x, y, w, h, c) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.c = c;
};

// Is the Mover in the Liquid?
Liquid.prototype.contains = function(m) {
  var l = m.position;
  return l.x > this.x && l.x < this.x + this.w &&
         l.y > this.y && l.y < this.y + this.h;
};

// Calculate drag force
Liquid.prototype.calculateDrag = function(m) {
  // Magnitude is coefficient * speed squared
  var speed = m.velocity.mag();
  var dragMagnitude = this.c * speed * m;

  // Direction is inverse of velocity
  var dragForce = m.velocity.copy();
  dragForce.mult(-1);

  // Scale according to magnitude
  // dragForce.setMag(dragMagnitude);
  dragForce.normalize();
  dragForce.mult(dragMagnitude);
  return dragForce;
};

Liquid.prototype.display = function() {
  noStroke();
  fill(50);
  rect(this.x, this.y, this.w, this.h);
};

function Mover(m,x,y) {
  this.mass = m;
  this.position = createVector(x,y);
  this.velocity = createVector(0,0);
  this.acceleration = createVector(0,0);
}

// Newton's 2nd law: F = M * A
Mover.prototype.applyForce = function(force) {
  var f = p5.Vector.div(force,this.mass);
  this.acceleration.add(f);
};

Mover.prototype.update = function() {
  this.velocity.add(this.acceleration);
  // position changes by velocity
  this.position.add(this.velocity);
  this.acceleration.mult(0);
};

Mover.prototype.display = function() {
  stroke("#006699");
  strokeWeight(2);
  //fill(,127);
  quad(this.position.x,this.position.y,this.mass*16,this.mass*16);
};

// Bounce off bottom accordingly
Mover.prototype.checkEdges = function() {
  if (this.position.y > (height - this.mass*8)) {
    // A little dampening when hitting the bottom
    this.velocity.y *= -0.9;
    this.position.y = (height - this.mass*8);
  }
};
