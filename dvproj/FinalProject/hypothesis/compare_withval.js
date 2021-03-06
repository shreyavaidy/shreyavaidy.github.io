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

function setup(){
  createCanvas(windowWidth, 600);

  button1 = createButton('>');
  button1.position(550, 50);
  button1.mousePressed(nextState);

  button2 = createButton('<');
  button2.position(500, 50);
  button2.mousePressed(backState);
}

function backState() {
    window.location.href = "chart4.html";
}

function nextState() {
  window.location.href = "finaldemo.html";
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

function mouseInBounds(x1, y1, x2, y2){
  //console.log(mouseX);
  //console.log(mouseY);
  return (mouseX > x1 && mouseX < x2 && mouseY > y1 && mouseY < y2);
}

function draw() { 
  background('#fafae5');
  fill('#252525');
  stroke(255);
  //console.log(data.getRowCount());
  //console.log(data.columns);
  


  //fill('white');
  //Make lines and labels to show
  ellipse(200, 45, 10, 10);
  textSize(15);
  text("X Axis: Date", 50, 50);
  text("-------- NIFTY",220, 50);
  fill(255, 128, 128);
  stroke(255, 128, 128);
  ellipse(200, 70, 10, 10);
  text("------- Pharma",220, 75);
  
  // fetch values and min/max for dates
  dates = data.getColumn("Date");
  //console.log(dates);

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

  push();
  //moving the origin to the bottom left corner
  scale(1, -1);
  translate(0, -height);

  for (var i = 1; i < data.getRowCount(); i++) {
    // y position is NIFTY; x position is date
    stroke(255, 128, 128);
    fill('#252525');
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

    //y position is Pharma; x position is date
    let prev_y2 = map(pharma.values[i-1], pharma.min, pharma.max, 100, 400);
    let ypos2 = map(pharma.values[i], pharma.min, pharma.max, 100, 400);
    
    stroke('#252525');
    strokeWeight(10);

    point(prev_x,prev_y2);
    point(xpos,ypos2);

    //Draw a line between each of the points (color it according to slope?)
    strokeWeight(1);
    line(prev_x,prev_y2,xpos,ypos2);
  }
  pop();

  stroke(255,255,255);
  for(var i = 1; i<data.getRowCount(); i++){
    
     //y position is NIFTY, y2 is Pharma; x position is date
    let prev_x = map(num[i-1], 150, 520, 100, 1000);
    let prev_y = map(nifty.values[i-1], nifty.min, nifty.max, 100, 400);
    let xpos = map(num[i], 150, 520, 100, 1000);
    let ypos = map(nifty.values[i], nifty.min, nifty.max, 100, 400);

    let prev_y2 = map(pharma.values[i-1], pharma.min, pharma.max, 100, 400);
    let ypos2 = map(pharma.values[i], pharma.min, pharma.max, 100, 400);

    if(mouseInBounds(prev_x-10,prev_y-10,prev_x+10,prev_y+10)){
      //console.log("In bounds");
      rect(700, 150, 250, 55, 20);
      fill('black');
      noStroke();
      textSize(12);
      //text("Date -"+ date[i], 720, 160);
      text("Value of NIFTY: -"+ypos, 720, 180);
    }

    if(mouseInBounds(prev_x-10,ypos2-10,prev_x+10,ypos2+10)){
      //console.log("In bounds");
      rect(700, 150, 250, 55, 20);
      fill('black');
      textSize(12);
      text("Value of Pharma -"+ypos2, 720, 180);
    }
  }
}


