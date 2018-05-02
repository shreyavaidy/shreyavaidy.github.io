let data;
var num = []

// preload table data
function preload() {
    data = loadTable(
      'compare.csv',
            'csv',
            'header');
}

// using a p5js table object, return an object having
// the values of the given column, plus the minimum value
// and maximum value from that column
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
  createCanvas(640, 480, WEBGL);

  console.log(data.getRowCount());
  console.log(data.columns);
  
  background(50);
  fill('white');
  text("LINE GRAPH",200,50);
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

  beginShape(LINES);  
  for (var i = 1; i < data.getRowCount(); i++) {
    // x position is NIFTY; y position is date
    stroke(255, 128, 128);
    strokeWeight(10);

    let prev_x = map(nifty.values[i-1], nifty.min, nifty.max, height, 0);
    let prev_y = map(num[i-1], 150, 520, 0, width);
    
    let xpos = map(nifty.values[i], nifty.min, nifty.max, height, 0);
    let ypos = map(num[i], 150, 520, 0, width);
    let zpos = map(pharma.values[i], pharma.min, pharma.max, height, 0);


    console.log(xpos);
    vertex(prev_x,prev_y);
    vertex(xpos, ypos,zpos);
    //If mouse if over the point, show the values of the point

    //Draw a line between each of the points (color it according to slope?)
    strokeWeight(1);
    line(prev_x,prev_y,xpos,ypos);
  }
  endShape();

}