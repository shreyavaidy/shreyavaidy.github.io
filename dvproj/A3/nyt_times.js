var title = [];
var facets = [];
var dates = [];
var times = [];
var time = [];
var dict = {};

function preload() {

  //API call
  var url = "https://api.nytimes.com/svc/topstories/v2/world.json";
  var apikey = "b2f0cb834a204d0ba9e21e733fecb353";
  url += "?api-key=" + apikey;

  nytResponse = loadJSON(url);
}

function setup() {
  createCanvas(1000, 1200);
  background(0);

  noLoop(); // runs draw() just once
  extract();     //User-defined function
}

function draw() {
  background("#252525");
  fill(200);

  var lineheight = 25;
  var margin = 70;

  push();

  textStyle(BOLD);
  textAlign(CENTER);
  textFont('Trebuchet MS');
  textSize(42);
  //fill("$DCEDC8");
  fill("#30B096");
  text("TOP STORIES & TIME OF CREATION",width/2,50);
  fill("#CAF270");
  text("TOP STORIES & TIME OF CREATION",width/2+2,53);
  pop();

  translate(margin, margin+70);
  fill("#c6e2ff");
  textSize(15);

  //Getting all the keys in the dictionary
  keys = Object.keys(dict);
  //Sorting the keys in the dictionary -- DateTimeStamp in this case
  keys.sort();
  console.log(keys);

  for (var i=0; i<keys.length; i++) {     // now lets iterate in sort order
    var key = keys[i];
    var value = dict[key];
    text(value, 0, i*lineheight);
    //text(key, 500, i*lineheight);
  } 

  for (var i = 0; i < keys.length; i++) {
    var date_and_time = split(keys[i],'T');
    append(dates, date_and_time[0]);
    append(times, date_and_time[1]);
    //Draw the dates of the articles 
    fill("#CAF270");
    text(dates[i], 700, i*lineheight);
  }

  for(var i=0; i < times.length; i++){
    var t = split(times[i],'-');
    append(time, t[0]);
    fill("#30B096");
    textStyle(BOLD);
    text(time[i], 815, i*lineheight);
  }

}

function extract() {

  for (var i = 0; i < nytResponse.results.length; i++) {
    var s = nytResponse.results[i].created_date;
    var h = nytResponse.results[i].title;
    append(facets, s);
    append(title,h);

    dict[s] = h;  //Add each of the titles and the corresponding date of creation to myDictionary
  }
  //myDictionary.sort();
  //console.log(myDictionary);
  //myDictionary.print();
}
