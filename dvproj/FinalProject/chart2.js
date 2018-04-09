//1- Extract sentiment from natural language

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(250);
  frameRate(30);

}

function draw() {
  
  cx = windowWidth/2;
  cy = windowHeight/2;
  
  textSize(32);
  fill('#C1392B');
  text('Extract sentiment from natural language?',cx,100);
 
  //Drawing the interactive elements to show the stages of the analysis	 
  noStroke();
  ellipse(cx/2,cy, 30);
  ellipse(cx,cy, 40);
  ellipse(3*cx/2,cy, 50);

  if (dist(mouseX, mouseY, cx/2, cy) < 15) {
        textSize(20);
        text('Words are taken', cx,cy+cy/2);
    }
   
}