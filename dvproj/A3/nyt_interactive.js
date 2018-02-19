var title = [];
var facets = [];
var dates = [];
var times = [];
var time = [];
var myDictionary;

function preload() {
  //API call
  var url = "https://api.nytimes.com/svc/topstories/v2/world.json";
  var apikey = "b2f0cb834a204d0ba9e21e733fecb353";
  url += "?api-key=" + apikey;

  nytResponse = loadJSON(url);
}

function setup() {
  createCanvas(1000, 600);
  background(0);
  noLoop();
  extract();     //User-defined function
}


function draw() {
  background("#252525");
  fill(200);

  cx = width/2;
  cy = height/2;

  push();
  textStyle(BOLD);
  textAlign(CENTER);
  textFont('Trebuchet MS');
  textSize(40);
  fill("#30B096");
  text("TOP STORIES & TIME OF CREATION",width/2,50);
  fill("#CAF270");
  textSize(40);
  text("TOP STORIES & TIME OF CREATION",width/2+2,53);
  fill("#30B096");
  //draw rectangle across screen for timeline
  rect(0, cy, width, 8);
  pop();


  fill("#CAF270");
  noStroke();
  //when you hover over a circle
  if (dist(mouseX, mouseY, cx, cy+5) < 15) {
    text("Headline",width/2,cy/2);
    console.log("selected");
  }
  //draw circle on timeline that is interactive
  ellipse(cx ,cy+5, 25, 25);


  for (var i = 0; i < facets.length; i++) {

    var words = facets[i];
    var date_and_time = split(facets[i],'T');
    append(dates,date_and_time[0]);
    append(times,date_and_time[1]);
  }

  //console.log(myDictionary);

  for (key in myDictionary){
    myDictionary.get(key);
  }

  

}

function extract() {

  myDictionary = createStringDict('Times','Title');

  for (var i = 0; i < nytResponse.results.length; i++) {
    var s = nytResponse.results[i].created_date;
    var h = nytResponse.results[i].title;
    append(facets, s);
    append(title,h);

    myDictionary.create(s,h);   //Add each of the titles and the corresponding date of creation to myDictionary
  }
  myDictionary.remove('Times');       //Remove the first key-value pair that isn't from API
  //myDictionary.print();
}