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
  background("#252525");

  noLoop(); // runs draw() just once
  extract();     //User-defined function
}

function draw() {
  background(0);

  var lineheight = 20;
  var margin = 40;
  translate(margin, margin);

  var d = day();

  var todays_date = "2018"+"-"+"02"+"-"+d;
  //console.log(todays_date);

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
  }
  //console.log(dates);
  //console.log(times);
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
  //myDictionary.print();
  myDictionary.sort((a, b)=>{
      var keyA = new Date(a.updated_at),
          keyB = new Date(b.updated_at);
      // Compare the 2 dates
      if(keyA < keyB) return -1;
      if(keyA > keyB) return 1;
      return 0;
  });
}
