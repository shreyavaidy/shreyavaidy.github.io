let data;

// preload table data
function preload() {
    data = loadTable(
      'PRSA-adapted-aparrish.csv',
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
  createCanvas(640, 480);
  // how many rows?
  console.log(data.getRowCount());
  // what are the columns?
  console.log(data.columns);
  
  background(50);
  stroke(255);
  
  // fetch values and min/max for pm2.5
  let pm = colValsMinMax(data, "pm2.5");
  console.log(pm.min);
  console.log(pm.max);
  
  // fetch values and min/max for wind speed
  let iws = colValsMinMax(data, "Iws");
  console.log(iws.min);
  console.log(iws.max);

  // noprotect
  for (var i = 0; i < data.getRowCount(); i++) {
    
    // x position is pm2.5; y position is wind speed
    stroke(255, 128, 128);
    let xpos = map(pm.values[i], pm.min, pm.max, 0, width);
    let ypos = map(iws.values[i], iws.min, iws.max, height, 0);
    
    point(xpos, ypos);   
  }
}