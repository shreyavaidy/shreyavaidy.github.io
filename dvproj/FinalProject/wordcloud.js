var inputtext;
var count;
var countdown=5;

//Uploading the file as a txt to generate world cloud
function preload() {
  inputtext = loadStrings('newswords_2.txt');
}

function setup() {
  createCanvas(windowWidth, 500);
  //background("#252525");
  //console.log("Printing");
  
  //Using concordance() from RiTa.JS to obtain the word cloud
  // Joining the lines of input text to get a string instead of an array
  count = RiTa.concordance(inputtext.join(" "));      //count stores the total number of words in the string
  console.log(count);

  // set drawing parameters
  noStroke();
  //fill(255);
  //noLoop();
  frameRate(2);
}

function draw() {

  //Call the function makecloud to draw the wordcloud until countdown
  if(countdown!=0){
      makecloud(); 
      countdown--;   
  }
  else if(countdown==0){
    clear();
    countdown = 4;
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
