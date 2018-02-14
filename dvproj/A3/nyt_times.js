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
  createCanvas(800, 1000);
  background(0);

  noLoop(); // runs draw() just once

  extract();     //User-defined function
}

function draw() {
  background(0);

  var lineheight = 20;
  var margin = 40;
  translate(margin, margin);

  for (var i = 0; i < facets.length; i++) {
    //fill(random(0,255));
    fill(200);
    var words = facets[i];
    var date_and_time = split(facets[i],'T');
    
    append(dates,date_and_time[0]);
    append(times,date_and_time[1]);

    //facets.sort();
    //text(facets[i], 0, i*lineheight);
    text(title[i], 0, i*lineheight);
  }

  for(var i = 0; i < dates.length; i++){
    fill(255);   
    //text(times[i], 600, i*lineheight);
    text(dates[i], 500, i*lineheight);
     //To sort dates? //dates.sort(function(a,b){return a.getTime() - b.getTime()});
    /*
    var currentOffset = 0;
    for (var j = 0; j < times.length; j++) {
      var wordWidth = textWidth(times[j]);
      fill(128+(i*10));
      rect(25+currentOffset, 25+i*20, wordWidth, 16);

      if (mouseIsPressed) {
        fill(0);
        text(times[j], 605+currentOffset, 25+i*20);
         
      }
      // four pixels between words
      currentOffset += wordWidth + 4; 
    } */   
  }

  console.log(dates);
  console.log(times);
}

function extract() {

  for (var i = 0; i < nytResponse.results.length; i++) { 
    var s = nytResponse.results[i].created_date;
    var h = nytResponse.results[i].title;

    append(facets, s);
    append(title,h);
  }

  console.log(title); // Data retreived from the API
}