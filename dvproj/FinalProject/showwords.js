var nor;

function preload(){
  table = loadTable('hypothesis/dict.csv', 'csv', 'header');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  loadData();
  noLoop();

  button1 = createButton('>');
  button1.position(100, 50);
  button1.mousePressed(nextState);

  button2 = createButton('<');
  button2.position(50, 50);
  button2.mousePressed(backState);
}

function backState() {
    window.location.href = "chart3.html";
}

function nextState() {
  window.location.href = "finaldemo.html";
}

function loadData() {
  //count the rows
  nor = table.getRowCount();
}

function draw(){
  background("#fafae5");

  fill('#252525');
  textAlign(CENTER);
  textStyle(BOLD);

  textSize(35);
  textFont('Arial');
  text('How did these words get scored?', 100, 100);

  textStyle(NORMAL);
  textSize(14);

  for (var r = 0, i=120; r < nor -1 ; r++, i+=12){
      text("{", 190, 120);

      print(table.getString(r, 0));
      print(table.getString(r, 1));

      var word = table.getString(r,0);
      var score = table.getString(r,1);
 
      if(score=="positive"){
        fill('red');  
        text(word, 200, i);
        text(score, 450, i);
        text(":", 435, i);
      }else if(score=="negative"){
        fill('green');  
        text(word, 200, i);
        text(score, 450, i);
        text(":", 435, i);
      }   
      text("}", 500, i-10);   
  }
}