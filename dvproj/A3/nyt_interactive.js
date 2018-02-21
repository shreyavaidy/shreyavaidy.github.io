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
  createCanvas(1250, 600);
  background(0);
  frameRate(30);

  //noLoop();
  extract();     //User-defined function
}

function draw() {
  background("#252525");
  fill(200);

  var margin = 60;
  var linewidth = 28;
  var lineheight = 20;
  var rectheight = 8;

  var d = day();
  var todays_date = "2018"+"-"+"02"+"-"+d;
  //console.log(todays_date);

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
  
  for (var i = 0; i < facets.length; i++) {
    var words = facets[i];
    var date_and_time = split(facets[i],'T');
    append(dates,date_and_time[0]);           //Extract date from timestamo
    append(times,date_and_time[1]);           //extract time from timestamp
  }

  for(var i=0; i < times.length; i++){
    var t = split(times[i],'-');
    append(time, t[0]);
    //text(time[i], 815, i*lineheight);
  }

  //Sorting the timestamp
  keys = Object.keys(dict);
  keys.sort();
  //console.log(keys);

  for (var i=0; i<keys.length; i++) {     // now lets iterate in sort order
    var key = keys[i];
    var value = dict[key];

    //To find all articles posted today
    if(dates[i]==todays_date){
      //console.log(key);
      //console.log(value);
    }  

    //Draw circles for each of the articles and display the date and time.
    ellipse(margin+i*linewidth, cy+5, 25, 25);
    
    if (dist(mouseX, mouseY, margin+i*linewidth, cy+5) < 10) {
        textSize(20);
        fill("#30B096");
        text(key,margin+i*linewidth,cy-60);
        //text(time[i],margin+i*linewidth, cy-60);       //Display time

        push();
        fill("#92D6C7");
        //Draw rectangle to display date and title of top story
        rect(margin+300,cy+120,600,150);
        fill("#252525");
        textStyle(BOLD);
        textFont('Trebuchet MS');
        text("\""+dict[key]+"\"",margin+350,cy+150,400,100);
        //text(dates[i], cx+200, cy+250);
        //console.log(dates[i]);
        pop();
      }
    }

    
}


function extract() {

  for (var i = 0; i < nytResponse.results.length; i++) {
    var s = nytResponse.results[i].created_date;
    var h = nytResponse.results[i].title;
    append(facets, s);
    append(title,h);

    dict[s] = h;  //Add each of the titles and the corresponding date of creation to the dictionary
  }
  //console.log(dict);
}