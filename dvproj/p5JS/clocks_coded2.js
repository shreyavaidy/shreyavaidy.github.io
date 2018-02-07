var fontUltra;
function preload() {
  //fontUltra = loadFont('assets/Ultra.ttf');
}

function setup() {
  createCanvas(540, 550, WEBGL);
  pg = createGraphics(256,256); //using to place text on WebGL
}

function draw() {
  background(0);
  console.log("hello...");
  //pg.background(240, 150, 150);
  pg.background('#F0FFFF');
  noStroke();

  var locY = (mouseY / height - 0.5) * (-2);
  var locX = (mouseX / width - 0.5) * 2;
  
  //move your mouse to change light direction
  var dirX = (mouseX / width) * 2;
  var dirY = (mouseY / height) * 2;
  
  ambientLight(100); 
  directionalLight(250, 250, 50, -dirX, -dirY, 0.25); 
  //directionalLight(200, 0, 0, 0.25, 0.25, 0.25);
  //pointLight(0, 0, 200, locX, locY, 0);
  //pointLight(200, 200, 0, -locX, -locY, 0);

  var s = second();
  var m = minute();
  var h = hour();
  var time = h+":"+m+":"+s;

  rotateX(millis() * 0.0006);
  rotateY(millis() * 0.0006);  

  pg.textSize(42);
  pg.textFont('Georgia');
  //pg.textFont('Ultra');
  pg.fill('black');
  pg.text(time, 55, 135);

  //pass graphics as texture
  texture(pg);
  box(200, 200, 200);

}