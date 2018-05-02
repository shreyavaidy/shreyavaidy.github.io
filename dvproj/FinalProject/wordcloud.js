var inputtext;
var count;
var countdown=10;

//Uploading the file as a txt to generate world cloud
function preload() {
  inputtext = loadStrings('newswords_2.txt');
}

function setup() {
  createCanvas(windowWidth/2-100, 300);
  //background("#252525");
  //console.log("Printing");
  
  //Using concordance() from RiTa.JS to obtain the word cloud
  // Joining the lines of input text to get a string instead of an array
  count = RiTa.concordance(inputtext.join(" "));      //count stores the total number of words in the string
  console.log(count);

  // set drawing parameters
  textAlign(CENTER, CENTER);
  textSize(15);
  text("Wordcloud from news sentiment", windowWidth/4, 20);
  noStroke();
  //fill(255);
  //noLoop();
  frameRate(2);
}

function draw() {

  //Call the function makecloud to draw the wordcloud until countdown
  if(countdown!=0){
      makecloud();    
  }
}

function makecloud(){
    for (var i in count) {
    if (count.hasOwnProperty(i)) {
      fill(random(255));
      //textSize(count[i]);
      text(i, random(width), random(height));
    }
  }
      countdown--;
}

function resetBackground(){
  background('white');
  draw();
}

//setInterval(resetBackground, 3000);
