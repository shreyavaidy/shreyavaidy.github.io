function setup() {
  var canvas = createCanvas(1200, 500);
  // Move the canvas so it’s inside our <div id="sketch-holder">.
  canvas.parent('sketch-holder');

  background(255, 0, 200);
}

function draw() {
  //background("#fdd7d0");
  background("#FDDCB1");
  
    textSize(30);
    fill("#0E3849");
    text('Buy the rumour, Sell the news', width, height/2);
}
