// An array of stripes
var stripes = [];
var myFont1;

function setup() {
  var cnv1 = createCanvas(windowWidth, 500);
  // Move the canvas to be inside <div id="sketch2-holder">.
  cnv1.parent('sketch2-holder');

  // Initialize all Stripe objects
  for (var i = 0; i < 10; i ++ ) {
    stripes.push(new Stripe());
  }
}


function draw() {
  background('#EED369');
  // Move and display all Stripe objects
  for (var i = 0; i < stripes.length; i ++ ) {
    // Check if mouse is over the Stripe
    stripes[i].rollover(mouseX,mouseY); // Passing the mouse coordinates into an object.
    stripes[i].move();
    stripes[i].display();
  }

  fill('#373C3E');
  textStyle(BOLD);
  textSize(45);
  textFont('Open Sans');
  text("Buy the Rumour, Sell the News", windowWidth/2-100, 150);
  textSize(15);
  textStyle(ITALIC);
  text("Examining Algorithmic trading strategies visually through Sentiment Analysis", windowWidth/2, 200);
}
