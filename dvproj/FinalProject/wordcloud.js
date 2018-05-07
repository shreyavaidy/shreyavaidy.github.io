var inputtext;
var count;
var countdown=15;

//Uploading the file as a txt to generate world cloud
function preload() {
  inputtext = loadStrings('newswords_2.txt');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //background("#252525");
  //console.log("Printing");

  //Using concordance() from RiTa.JS to obtain the word cloud
  // Joining the lines of input text to get a string instead of an array
  count = RiTa.concordance(inputtext.join(" "));      //count stores the total number of words in the string
  console.log(count);

  // set drawing parameters
  noStroke();
  frameRate(2);
  button1 = createButton('>');
  button1.position(100, 50);
  button1.mousePressed(nextState);

  button2 = createButton('<');
  button2.position(50, 50);
  button2.mousePressed(backState);
}

function backState() {
    window.location.href = "chart2.html";
}

function nextState() {
  window.location.href = "chart4.html";
}

function draw() {
  background("#FF6961");
  background('#fafae5');
  //Call the function makecloud to draw the wordcloud until countdown
  if(countdown!=0){
      makecloud();
      countdown--;
      push();
      fill('#756300');
      textStyle(BOLD);
      textSize(40);
      textFont('Arial');
      text('Words occuring more frequently are bigger', 200, 80);
      pop();
  }
  else if(countdown==0){
    //clear();
    background('#fafae5');
    push();
    fill('#756310');
    textStyle(BOLD);
    textSize(40);
    textFont('Arial');
    text('Words occuring more frequently are bigger', 200, 80);
    pop();
    countdown = 8;

  }
}

function makecloud(){
    for (var i in count) {
    if (count.hasOwnProperty(i)) {
      fill(random(200,0,0));
      textSize(count[i]+15);
      text(i, random(width), random(height));
    }
  }
}
