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
  createCanvas(1200, 600);

  //Change the bird image to a girl or object that will move with your keyboard
  birdImg = loadImage('assets/flappy_bird.png');
  pipeImg = loadImage('assets/flappy_pipe.png');
  // groundImg = loadImage('assets/trading_ground.png');
  groundImg = loadImage('assets/flappy_ground.png');
  bgImg = loadImage('assets/flappy_bg.png');

  bird = createSprite(width/2, height/2, 40, 40);
  bird.rotateToDirection = true;
  bird.velocity.x = 1;
  bird.setCollider('circle', 0, 0, 20);
  bird.addImage(birdImg);

  ground = createSprite(800/2, GROUND_Y+100); //image 1200x200
  // ground2 = createSprite(800, GROUND_Y+100); //image 800x200
  ground.addImage(groundImg);

  pipes = new Group();
  gameOver = true;
  updateSprites(false);

  camera.position.y = height/2;
}


function draw() {

  //Print the title
  noStroke();
  textSize(35);
  fill("#0E3849");
  text("Algorithmic Trading",width/2,50);

  if(gameOver && keyWentDown('x'))
    newGame();

  if(!gameOver) {

    if(keyWentDown('x'))
      bird.velocity.y = FLAP;

    bird.velocity.y += GRAVITY;

    if(bird.position.y<0)
      bird.position.y = 0;

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
  if(camera.position.x > ground.position.x-ground.width+width/2)
    ground.position.x+=ground.width;

  background(247, 134, 131);
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
  bird.velocity.y = 0;
  ground.position.x = 800/2;
  ground.position.y = GROUND_Y+100;
}

function mousePressed() {
 
}

function keyPressed(){
  if(key == ' '){
    console.log("MOVE FORWARD");
    //cause a force to make dora move forward or backward
    if(gameOver)
    newGame();
    bird.velocity.y = FLAP;
  }
  }
