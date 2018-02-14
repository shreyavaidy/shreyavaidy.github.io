var facets = [];
var img;
var myFont;

function preload() {
  //API call
  var url = "https://api.nytimes.com/svc/topstories/v2/world.json";
  var apikey = "b2f0cb834a204d0ba9e21e733fecb353";
  url += "?api-key=" + apikey;

  nytResponse = loadJSON(url);

  myFont = loadFont('assets/PlayfairDisplay-Regular.otf')
}

function setup() {
  createCanvas(1000, 600);
  noLoop();
  extract();
  //img = loadImage("assets/world.jpg");
  gif = loadGif('assets/spin.gif');
}

function draw() {
  background(245);

  var lineheight = 20;
  var margin = 40;
  translate(margin, margin);

  cx = width/2;
  cy = height/2;

  title = "TOP STORIES IN  The New York Times\'  WORLD SECTION COVERS:";

  textSize(25);
  textFont('Georgia');
  textAlign(CENTER);
  fill('black');
  text(title, 450, margin);

  var separator = ' ';
  var message = join(facets, separator);

  textSize(18);
  textFont(myFont);
  text(message, cx/6, cy/2, cx, 500);    //display the string of all countries
  //console.log(message);
  fill("#C79C6E");
  ellipse(cx+(cx/2), cy-20, 150, 150);  //to represent the world or globe
  image(gif,cx+(cx/2), cy-20);
}

function extract() {

  for (var i = 0; i < nytResponse.results.length; i++) {
    var s = nytResponse.results[i].geo_facet;
    append(facets, s);
    space = ' ';
    append(facets,space);   //adding a space after each geo-facet item
  }

   //console.log(facets); // make sure counted data looks as expected
}
