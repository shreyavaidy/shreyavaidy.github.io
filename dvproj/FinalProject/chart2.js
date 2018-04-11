//1- Extract sentiment from natural language

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(250);
}

function draw() {
  
  cx = windowWidth/2;
  cy = windowHeight/2;
  
  textSize(32);
  fill('#C1392B');
  text('Extract sentiment from natural language?',cx,100);
 
  //Drawing the interactive elements to show the stages of the analysis	 
  push();
  stroke('#2FE1D6');
  fill('#38C6BD');
  ellipse(cx/2,cy, 30);
  ellipse(cx,cy, 40);
  ellipse(3*cx/2,cy, 50);
  pop();

  if (dist(mouseX, mouseY, cx/2, cy) < 10) {
        push();
        fill('#3EAED3');
        textSize(20);
        text('Words are taken', cx/2,cy+cy/2);
        pop();
    }
  
  if (dist(mouseX, mouseY, cx, cy) < 20) {
        push();
        fill('#3EAED3');
        textSize(20);
        text('Bag of Words algorithm', cx,cy+cy/2);
        pop();
    }

   
}