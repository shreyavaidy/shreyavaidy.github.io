//Declare global variables to call and display in draw function 
var nor;
var col1;
var count;

// Display "Loading..." on the screen so we see something's happening
function preload(){
  table = loadTable('assets/min_EWBE.csv', 'csv', 'header');
  table2 = loadTable('assets/EBE_data.csv', 'csv' ,'header');
}

// In this sketch everything happens in setup
function setup() {
  createCanvas(windowWidth, windowHeight);

  r = random(255);
  g = random(255);
  b = random(255);

  loadData();
}

function loadData() {

  //count the rows
  nor = table.getRowCount();

  //get the borough names
  col1 = table2.getColumn("Row Labels");
  col2 = table2.getColumn("Count of Borough");
  
  //Get all values from second CSV file
   for (var r = 0; r < table2.getRowCount(); r++)
    for (var c=0; c < table2.getColumnCount(); c++)
      print(table2.getString(r, c));   
}

function draw(){

  background("#EEEEEE");

  fill(200);

  cx = width/2;
  cy = height/2;
  
  //Print the title
  noStroke();
  textStyle(BOLD);
  textAlign(CENTER);
  textFont('Arial');
  textSize(32);
  fill("#0E3849");
  text("Minority & Women Owned Business Enterprises in NYC",width/2,50);
  textSize(20);
  fill("#009688");
  text("["+"Total no. in each borough"+"]", width/2,72);

  //text(col1, 50, 370);
  //text(col2, 50, 395);

  //Draw rectangular box to put graph in
  noStroke();
  translate(50,100);
  fill("#252525");
  rect(cy-cy/2,20, cx+250, 400);


  //Print the boroughs from CSV
  fill("#07B8F2");
  textSize(20);
  textAlign(LEFT);
  fill("#8DDBDA");
  for (var r = 0, i = 75; r < nor-1; r++, i+=80){
    text(table.getString(r,0),cy-cy/2+25,i);
  } 
   
  //Printing out the actual numbers     
  textStyle(NORMAL);
  textStyle(ITALIC);  
  textSize(13);  
  fill("#64EFC7");
  fill("#FFD966");
  for (var r = 0, i = 65; r < nor-1; r++, i+=80){
    text("("+table.getString(r, 1)+")", cy+cy/3, i);
  }
  //rect(cy-cy/2+220,20,1,400);
  //console.log(cy-cy/2+200); 354.5

  var x = cy+cy/2;
  var space = 45;
  var vspace = 80;

  //Draw the visualization by taking the lowest count as the common denominator to visualise - so around 178 to 200
  fill("#FF6962");
  //Bronx
  rect(x, 40, 40, 40);
  rect(x+space, 40, 40, 40);
  rect(x+2*space, 40, 20, 40, 0,10,10,0);
  
  //Brooklyn
  for(var i=0; i<5; i++){
    rect(x+i*space, 40+vspace, 40, 40);
  }

  //Manhattan
  for(var i=0; i<8; i++){
    rect(x+i*space, 40+2*vspace, 40, 40);
  }
  rect(x+8*space, 40+2*vspace, 15, 40, 0,10,10,0);

  //Queens
  for(var i=0; i<3; i++){
    rect(x+i*space, 40+3*vspace, 40, 40);
  }
  rect(x+3*space, 40+3*vspace, 10, 40, 0,10,10,0);

  //Staten Island
  rect(x, 40+4*vspace, 40, 40);

  fill("#07B8F2");

  //Displaying the breakdown by ethnicity
  for (var r = 1, i = 35; r < nor; r++, i+=15){
    text(table2.getString(r, 0), 2*cy, i);
    text(table2.getString(r, 1), 3*cy, i);
  }

}

// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the box, then pop-up extra results
  var d = dist(mouseX, mouseY, 360, 200);

}