// An array of stripes
var stripes = [];
var myFont1;

function setup() {
  var cnv1 = createCanvas(windowWidth, 200);
  // Move the canvas to be inside <div id="sketch2-holder">.
  cnv1.parent('sketch2-holder');

  // Initialize all Stripe objects
  for (var i = 0; i < 10; i ++ ) {
    stripes.push(new Stripe());
  }
}


function draw() {
  background('#48466D');
  // Move and display all Stripe objects
  for (var i = 0; i < stripes.length; i ++ ) {
    // Check if mouse is over the Stripe
    stripes[i].rollover(mouseX,mouseY); // Passing the mouse coordinates into an object.
    stripes[i].move();
    stripes[i].display();
  }

  fill('#FAE3E3');
  textStyle(BOLD);
  textSize(30);
  textFont('Open Sans');
  text("Buy the Rumour, Sell the News", windowWidth/2+100, 150);
}
