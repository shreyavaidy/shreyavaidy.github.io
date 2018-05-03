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
  window.location.href = "finaldemo.html#app";
}

function loadData() {
  //count the rows
  nor = table.getRowCount();
}

function draw(){
  background("#fafae5");

  fill('#252525');
  textStyle(BOLD);

  textSize(35);
  textFont('Arial');
  text('How did these words get scored?', 150, 100);

  textStyle(NORMAL);
  textSize(14);

  text("{", 290, 120);
  for (var r = 0, i=120; r < nor -1 ; r++, i+=10){
  
      //print(table.getString(r, 0));
      //print(table.getString(r, 1));

      fill('#252525');
      var word = table.getString(r,0);
      text(word, 300, i);
      var score = table.getString(r,1);
      
      if(score=="positive"){ 
        fill('#245F4B');       
        text(score, 550, i);
        text(":", 535, i);
      }else if(score=="negative"){
        fill('#E53935');  
        text(score, 550, i);
        text(":", 535, i);
      }   
  }

  fill('#252525');
  text("}", 620, i-10);   
}