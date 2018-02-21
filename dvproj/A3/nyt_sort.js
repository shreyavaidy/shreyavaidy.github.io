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

  //console.log(myDictionary);

}


function extract() {

  myDictionary = createStringDict('Date','Time','Title');

  for (var i = 0; i < nytResponse.results.length; i++) {
    var s = nytResponse.results[i].created_date;
    var h = nytResponse.results[i].title;
    append(facets,s);
    append(title,h);
  }

   for (var i = 0; i < facets.length; i++) {
    var date_and_time = split(facets[i],'T');
    append(dates,date_and_time[0]);
    append(times,date_and_time[1]);

  //Add each of the titles and the corresponding date of creation to myDictionary
  }

  for(var j = 0; j < facets.length; i++){
    var date = dates[i];
    var titles = title[i];
    var time = times[i];
    
    myDictionary.create(dates,times,titles);
  }
       

  myDictionary.remove('Date');       //Remove the first key-value pair that isn't from API
  myDictionary.print();

  var orderedDates = {};
  var keys = Object.keys(myDictionary);

  keys.sort();

  for (var i=0; i<keys.length; i++) { // now lets iterate in sort order
    var key = keys[i];
    //console.log(key);
    //var value = dict[key];
    /* do something with key & value here */
  } 
  
}