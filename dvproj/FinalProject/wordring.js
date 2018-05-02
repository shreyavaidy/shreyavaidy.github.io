var inputtext;
var count;
var countdown=10;

//Uploading the file as a txt to generate world cloud
function preload() {
  inputtext = loadStrings('newswords.txt');
}

function setup() {
  // Move the canvas to be inside <div id="sketch2-holder">.
    
    var cnv1 = createCanvas(700, 700);
    cnv1.parent('sketch2-holder');
    textAlign(CENTER, CENTER);
    rectMode(CENTER);
    angleMode(DEGREES);

    button1 = createButton('>');
    button1.position(100, 850);
    button1.mousePressed(nextState);

    button2 = createButton('<');
    button2.position(50, 850);
    button2.mousePressed(backState);

    //count = RiTa.concordance(inputtext.join(" "));      //count stores the total number of words in the string
    //console.log(count);
}

function backState() {
    window.location.href = "finaldemo.html";
}

function nextState() {
  window.location.href = "chart3.html";
}


function draw() {
    //background(250,128,114);
    background("#FF6961");

    var amount = 6;
    var spacing = 25;
    var radius = 120;
  
    for (var i = 0; i < amount; i++) {
        createWordRing(radius + spacing * i, 30 + 10 * i, i);
    }

    drawTitleText();
    drawSubtitleText();
}

function createWordRing(radius, amount, seed) {
    randomSeed(seed);
    var randomNumbers = inputtext;

    //var randomwords = inputtext;
    //console.log(randomwords);

    for (var i = 0; i <= amount; i++) {
        randomNumbers.push(parseInt(random(2), 10));
    }
    var spacing = 360 / amount;

    push();
    translate(width / 2, height / 2);
    var rotSpeed = 0.2;
    rotate(frameCount * random(-rotSpeed, rotSpeed));
    
    textSize(15);
    for (var i = 0; i < amount; i+=5) {
        push();
        rotate(i * spacing);
        var num = new Num(randomNumbers[i], 0 + radius, 0, 90, random(50, 255));
        num.render();
        pop();
    }

    pop();
}

function Num(msg, x, y, rot, clr) {
    this.x = x;
    this.y = y;
    this.rot = rot;
    this.msg = msg;
    this.color = clr;

    this.render = function() {
        push();
        fill(this.color);
        translate(this.x, this.y);
        rotate(this.rot);
        text(this.msg, 0, 0);
        pop();
    }
}

function drawTitleText() {
    push();
    translate(width / 2, height / 2);

    var scaleFactor = 0.5;
    var maxLimit = 200;
    if (frameCount < maxLimit) {
        var currentScale = map(frameCount, 0, maxLimit, 0, scaleFactor);
        scale(1.5 + currentScale);
    } else {
        scale(1.5 + scaleFactor);
    }

    strokeWeight(2);
    stroke(255);
    fill(0, 200);
    rect(0, 0, 210, 30);

    fill(255);
    noStroke();
    textFont('Arial');
    text('Exploring BAG OF WORDS algorithm', 0, 0);
    pop();
}

function drawSubtitleText() {
    push();
    translate(width/2, height/2 + 50);
    scale(1.3);
    push();
    fill('#');
    var msg = '';
    text(msg, 0, 0);
    pop();
}