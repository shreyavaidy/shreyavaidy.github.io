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
var boroughs = [];
var count;
var myFont1, myFont2;


function preload(){
  table = loadTable('assets/min_EWBE.csv', 'csv', 'header');
  myFont1 = loadFont('assets/ABOVE.ttf');
  myFont2 = loadFont('assets/Quesha.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  loadData();
}

function loadData() {

  //count the rows
  nor = table.getRowCount();

  //get the borough names
  col1 = table.getColumn("Row Labels");
	col2 = table.getColumn("Count of Borough");

  //Get the names of the boroughs from Table
  for (var r = 0; r < nor -1 ; r++)
      print(table.getString(r, 0));
      var temp = table.getString(r, 0);    
      append(boroughs, temp);

  //Get the values for each borough and add to a list
   for (var r = 0; r < nor-1; r++)
      print(table.getString(r, 1));   
}

function draw(){

  background("#EEEEEE");
  fill(200);
  cx = width/2;
  cy = height/2;
  
  //Print the title
  textStyle(BOLD);
  textAlign(CENTER);
  textFont(myFont1);
  textSize(35);
  fill("#0E3849");
  text("Minority & Women Owned Business Enterprises in NYC",width/2,50);
  textSize(25);
  fill("#009688");
  text("("+"Total no. in each borough"+")", width/2,72);

  //Draw rectangular box to put graph in
  noStroke();
  translate(50,100);
  fill("#252525");
  rect(cy-cy/2,20, cx+250, 400);


  //Print the boroughs from CSV
  textFont(myFont1);
  fill("#07B8F2");
  textSize(20);
  textAlign(LEFT);
  fill("#8DDBDA");
  for (var r = 0, i = 75; r < nor-1; r++, i+=80){
    text(table.getString(r,0),cy-cy/2+25,i);
  } 
   
  //Printing out the actual numbers     
  //textFont('Arial');
  textFont(myFont2);
  textSize(20);  
  fill("#64EFC7");
  fill("#FFD966");
  for (var r = 0, i = 65; r < nor-1; r++, i+=80){
    text(table.getString(r, 1), cy+cy/3, i);
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
}