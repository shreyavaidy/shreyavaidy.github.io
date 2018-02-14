var title = [];
var facets = [];
var dates = [];
var times = [];

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
  var margin = 50;

  push();
  textStyle(BOLD);
  textAlign(CENTER);
  textFont('Tahoma');
  textSize(30);
  fill("#90EE90");
  text("TOP STORIES & TIME OF CREATION",width/2,20);
  pop();

  translate(margin, margin+50);

  for (var i = 0; i < facets.length; i++) {
    fill(255);
    textSize(15);
    var words = facets[i];
    var date_and_time = split(facets[i],'T');
    append(dates,date_and_time[0]);
    append(times,date_and_time[1]);

    fill("#c6e2ff");
    //text(facets[i], 0, i*lineheight);

    text(title[i], 10, i*lineheight);
    text(dates[i], 700, i*lineheight);
    text(times[i], 800, i*lineheight);
  }

}

function extract() {

  var myDictionary = createStringDict('Times','Title');

  for (var i = 0; i < nytResponse.results.length; i++) {
    var s = nytResponse.results[i].created_date;
    var h = nytResponse.results[i].title;
    append(facets, s);
    append(title,h);

    myDictionary.create(s,h);   //Add each of the titles and the corresponding date of creation to myDictionary
  }
  //myDictionary.sort();
  //console.log(myDictionary);
  //myDictionary.print();
}
