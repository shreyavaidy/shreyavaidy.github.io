var dora;

function setup(){
  createCanvas(1200, 800);
  background('#fad3d1');
  dora = new Dora();
}

function draw(){
  background(0);  
  dora.update();
  dora.show();
}

function keyPressed(){
  if(key == ' '){
    console.log("MOVE FORWARD");
    //cause a force to make dora move forward or backward
    dora.move();
  }
}