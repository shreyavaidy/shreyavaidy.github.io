function setup() {
  createCanvas(1200, 580);
  background('#fad3d1');
}

function draw() {

  	textSize(32);
  	fill("#0E3849");
  	text("Data Visualization through Misrepresentation", width/4, 50);
	
	for(var i=0; i<10; i++){
		fill(51);
	  	quad(58+i, 151+i, 106, 120+i, 89, 203, 50, 236);
	  	
	}  
 
}