var myCanvas;
var str = 'P5.js'
var result = str.link("https://p5js.org/")

function setup(){
  // use a variable to store a pointer to the canvas as below

  myCanvas = createCanvas(70,100);
}

function draw(){

  background(133, 187, 101);  
  // move canvas to the horizontal mouse and vertical mouse
  //relative to the window

  myCanvas.position(0,winMouseY)
  translate(0,0)
  textStyle(BOLD);
  fill("white")
  textSize(10)
  text('Follow the\n\n' +'\nbuy\nsell\nhold \ntrade',map(winMouseX,0,windowWidth/3,0,0),0)

}