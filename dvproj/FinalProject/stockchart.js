var prices = [2.99, 4.00, 1.00, 3.5];
var stock_prices = [11380.1,11279.4,11469.5,11527.8,11483.4,11494.6,11487.6,11586,11454.9,11534.6,11571.9,11530.2,11268.9,11124.3,10606,10818.8,10665.8,10871.1,10990.6,10901.3,10747.9,10559.3,10595.7,10751,510642.1,10693.85];

var lastPrice = 0;

function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background('white');
	fill('green');
	for (var i=0; i<stock_prices.length; i++) {
		console.log(stock_prices[i]);
		var adjustedPrice = map(stock_prices[i], 0, 5, 0, 0);
		line(i*100, lastPrice, (i+1)*100, height - adjustedPrice);
		lastPrice = height - adjustedPrice;
	}
}