//flappy bird-like
//mouse click or x to flap

var GRAVITY = 0.1;
var FLAP = -3;
var GROUND_Y = 450;
var MIN_OPENING = 300;

var bird, ground;
var pipes;

var gameOver;
var birdImg, pipeImg, groundImg, bgImg;


function setup() {
  createCanvas(800, 500);
  background(133, 187, 101); 

  //Change the bird image to a girl or object that will move with your keyboard
  birdImg = loadImage('assets/dogecoin.png');
  pipeImg = loadImage('assets/flappy_pipe.png');
  groundImg = loadImage('assets/trading_ground.png');
  bgImg = loadImage('assets/flappy_bg.png');

  bird = createSprite(width/3, height/2, 40, 40);
  bird.rotateToDirection = false;
  bird.velocity.x = 1;
  bird.setCollider('circle', 0, 0, 10);
  bird.addImage(birdImg);

  ground = createSprite(800/2, GROUND_Y+100); //image 800x200
  ground.addImage(groundImg);

  pipes = new Group();
  gameOver = true;
  updateSprites(false);

  camera.position.y = height/2;
}


function draw() {

  //When starting, the gameOver is set to true and you begin by pressing the spacebar
  if(gameOver && keyWentDown(' '))
    newGame();

  //When the game is being played, gameOver==true
  if(!gameOver) {

    if(keyWentDown(' '))
      bird.velocity.y = FLAP;
      bird.velocity.y += GRAVITY;

      if(bird.position.y<0){
        bird.position.y = 0;
      }
      if(bird.position.y+bird.height/2 > GROUND_Y)
        die();
      if(bird.overlap(pipes))
        die();
      //spawn pipes
      if(frameCount%60 === 0) {
        var pipeH = random(50, 300);
        var pipe = createSprite(bird.position.x + width, GROUND_Y-pipeH/2+1+100, 80, pipeH);
        pipe.addImage(pipeImg);
        pipes.add(pipe);
        //top pipe
        if(pipeH<200) {
          pipeH = height - (height-GROUND_Y)-(pipeH+MIN_OPENING);
          pipe = createSprite(bird.position.x + width, pipeH/2-100, 80, pipeH);
          pipe.mirrorY(-1);
          pipe.addImage(pipeImg);
          pipes.add(pipe);
        }
      }

    //get rid of passed pipes
    for(var i = 0; i<pipes.length; i++)
      if(pipes[i].position.x < bird.position.x-width/2)
        pipes[i].remove();
  }

  camera.position.x = bird.position.x + width/4;

  //wrap ground
  if(camera.position.x > ground.position.x-ground.width+width/4)
    ground.position.x+=ground.width;

  // background(247, 134, 131);
  background(133, 187, 101);          //set the background of the sketch as green
  text('See the trades LIVE');

  camera.off();
  image(bgImg, 0, GROUND_Y-190);
  camera.on();

  drawSprites(pipes);
  drawSprite(ground);
  drawSprite(bird);
}

function die() {
  updateSprites(false);
  gameOver = true;
}

function newGame() {
  pipes.removeSprites();
  gameOver = false;
  updateSprites(true);
  bird.position.x = width/2;
  bird.position.y = height/2;
  bird.velocity.y = 0.1;
  ground.position.x = 800/2;
  ground.position.y = GROUND_Y+100;
}

function mousePressed() {
    if(gameOver)
    newGame();
    bird.velocity.y = FLAP;
}

function keyPressed(){
  if(key == ' '){
    console.log("MOVE FORWARD");
    //cause a force to make dora move forward or backward
  }
  }
