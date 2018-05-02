var nor;

function preload(){
  table = loadTable('hypothesis/dict.csv', 'csv', 'header');
}

function setup() {
  createCanvas(1000, 800);
  loadData();
  noLoop();
    
    button1 = createButton('>');
    button1.position(width/2 - 40, 25);
    button1.mousePressed(nextState);

    button2 = createButton('<');
    button2.position(width/2 - 80, 25);
    button2.mousePressed(backState);

    count = RiTa.concordance(inputtext.join(" "));      //count stores the total number of words in the string
    //console.log(count);
}

function backState() {
    window.location.href = "chart2.html";
}

function nextState() {
  window.location.href = "finaldemo.html";
}

function loadData() {
  //count the rows
  nor = table.getRowCount();
}

function draw(){

  background(255,255,255);

  fill('black');
  push();
  textStyle(BOLD);
  textSize(35);
  textFont('Arial');
  text('How did these words get scored?', 100, 100);
  pop();

    //Get the names of the boroughs from Table
  for (var r = 0, i=120; r < nor -1 ; r++, i+=12){
      text("{", 190, 120);
      print(table.getString(r, 0));
      var word = table.getString(r,0);
      text(word, 200, i);

      text(":", 435, i);

      print(table.getString(r, 1));
      var score = table.getString(r,1);
      text(score, 450, i);
  }
      text("}", 500, i-10);
}