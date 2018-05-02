let data;
var num = []
var isOverCircle;

// preload table data
function preload() {
    data = loadTable(
      'compare.csv',
			'csv',
			'header');
}

function colValsMinMax(tab, colName) {
  let vals = data.getColumn(colName);
  let obj = {
    values: vals,
    min: min(vals),
    max: max(vals),
  }
  return obj;
}

function setup() { 

  createCanvas(windowWidth, 600);
  
  //moving the origin to the bottom left corner
  scale(1, -1);
  translate(0, -height);
  
  console.log(data.getRowCount());
  console.log(data.columns);
  
  background(50);
  fill('white');
  stroke(255);
  
  // fetch values and min/max for dates
  dates = data.getColumn("Date");
  //console.log(dates);

  //var myDictionary = createStringDict('Date','ypos');

  var ypos = 150;
  var v = ypos;
  //add dates to y values in num array
  for(var iter=0; iter<26; iter++){
    v += 10;
    num[iter] = v;
  }

  // fetch values and min/max for the NIFTY values
  let nifty = colValsMinMax(data, "NIFTY");
  console.log(nifty.min);
  console.log(nifty.max);
  nifty_min = 100;
  nifty_max = 1000;

  // fetch values and min/max for Pharma values
  let pharma = colValsMinMax(data, "Pharma");
  console.log(pharma.min);
  console.log(pharma.max);

  for (var i = 1; i < data.getRowCount(); i++) {
    // x position is NIFTY; y position is date
    stroke(255, 128, 128);
    strokeWeight(10);

    let prev_x = map(num[i-1], 150, 520, 100, 1000);
    let prev_y = map(nifty.values[i-1], nifty.min, nifty.max, 100, 400);
    
    let xpos = map(num[i], 150, 520, 100, 1000);
    let ypos = map(nifty.values[i], nifty.min, nifty.max, 100, 400);
    
    //console.log(xpos);
    point(prev_x,prev_y);
    point(xpos, ypos);

    //Draw a line between each of the points (color it according to slope?)
    strokeWeight(1);
    line(prev_x,prev_y,xpos,ypos);

    console.log("hello");
    if(mouseInBounds(prev_x,prev_y,xpos,ypos)){
      console.log("In bounds");
      fill(255);
      text("Value of NIFTY is:"+ypos, 500, 200);
    }

  }

  for(var i = 1; i<data.getRowCount(); i++){
    //x position is Pharma; y position is date
    stroke(255,255,255);
    strokeWeight(10);

    let prev_x2 = map(num[i-1], 150, 520, 100,1000);
    let prev_y2 = map(pharma.values[i-1], pharma.min, pharma.max, 100, 400);
    
    let xpos2 = map(num[i], 150, 520, 100, 1000);
    let ypos2 = map(pharma.values[i], pharma.min, pharma.max, 100, 400);
    
    point(prev_x2,prev_y2);
    point(xpos2, ypos2);

    //Draw a line between each of the points (color it according to slope?)
    strokeWeight(1);
    line(prev_x2,prev_y2,xpos2,ypos2);

  }

  //Make lines and labels to show
  ellipse(200, 50, 10, 10);
  textSize(15);
  textAlign(CENTER,CENTER);
  //translate(10,10);
  //rotate(PI/2);
  text("X Axis:", 100, 50);
  text("Date", 100, 30);
  text("-------- NIFTY",220, 50);
  fill(255, 128, 128);
  stroke(255, 128, 128);
  ellipse(200, 30, 10, 10);
  text("------- Pharma",220,30);
}

function mouseInBounds(x1, y1, x2, y2){
  console.log(mouseX);
  return (mouseX > x1 && mouseX < x2 && mouseY > y1 && mouseY < y2);
}

function draw(){
  fill(255);
  textSize(40);
  text("Blah blah blah", 100, 100);
}