//
// Example: Women and Minority owned business enterprises in NYC
// By Shreya Vaidyanathan (2018).
//
// This example uses M/WBE, LBE, and EBE Certified Business List
// per borough to demonstrate animated between two dimensions on the same axis.
// Data can be found online at - https://data.cityofnewyork.us/Business/M-WBE-LBE-and-EBE-Certified-Business-List/ci93-uc8s
//

//Declare global variables to call and display in draw function 
var nor;
var col1;
var count;
var myFont1, myFont2;

// state variables
var state = 0; // sums = 0, avgs = 1
var animFrame = 0;
var maxAnimFrame = 60;

// Display "Loading..." on the screen so we see something's happening
function preload(){
  table = loadTable('assets/min_EWBE.csv', 'csv', 'header');
  table2 = loadTable('assets/EBE_data.csv', 'csv' ,'header');
  myFont1 = loadFont('assets/ABOVE.ttf');
  myFont2 = loadFont('assets/Quesha.ttf');
}

// In this sketch everything happens in setup
function setup() {
  button = createButton('Demographic breakdown');
  button.mousePressed(toggleState);

  createCanvas(windowWidth, windowHeight);
  loadData();
  frameRate(30);
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
  textFont(myFont1);
  textSize(35);
  fill("#0E3849");
  text("Minority & Women Owned Business Enterprises in NYC",width/2,50);
  textSize(20);
  fill("#009688");
  text("["+"Total no. in each borough"+"]", width/2,72);


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
  textFont(myFont2);  
  textSize(20);  
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
  } rect(x+8*space, 40+2*vspace, 15, 40, 0,10,10,0);
  //Queens
  for(var i=0; i<3; i++){
    rect(x+i*space, 40+3*vspace, 40, 40);
  } rect(x+3*space, 40+3*vspace, 10, 40, 0,10,10,0);
  //Staten Island
  rect(x, 40+4*vspace, 40, 40);

  fill("#F7E8D8");
  
  if (isAnimating()) {
  //If the frame is animating then draw this
  animFrame--;
  hspace = 120;

  //Displaying the breakdown by ethnicity for every borough
  //Bronx
  for (var r = 1, i = 40; r < nor-1; r++, i+=15){
      text(table2.getString(r, 0), 2*cy, i);
      text(table2.getString(r, 1), 2*cy+hspace, i);
    }    
  //Brooklyn  
  for (var r = 6, i = 40; r < 10; r++, i+=15){
    text(table2.getString(r, 0), 2*cy+hspace, i+vspace);
    text(table2.getString(r, 1), 2*cy+2*hspace, i+vspace);
  }
  //Manhattan  
  for (var r = 11, i = 40; r < 15; r++, i+=15){
    text(table2.getString(r, 0), 3*cy-hspace+40, i+2*vspace);
    text(table2.getString(r, 1), 3*cy+40, i+2*vspace);
  }
  //Queens   
  for (var r = 16, i = 40; r < 20; r++, i+=15){
    text(table2.getString(r, 0), 2*cy, i+3*vspace);
    text(table2.getString(r, 1), 2*cy+hspace, i+3*vspace); 
  }
  //Staten Island
  for (var r = 21, i = 40; r < 25; r++, i+=15){
    text(table2.getString(r, 0), 1.7*cy, i+4*vspace);  
    text(table2.getString(r, 1), 1.7*cy+hspace, i+4*vspace);
  }

  }  
}


function toggleState() {
  state = (state == 0) ? 1 : 0;
  // console.log(state);
  animFrame = maxAnimFrame;
}

function percentAnim() {
  return (animFrame / maxAnimFrame);
}

function isAnimating() {
  return (animFrame != 0);
}