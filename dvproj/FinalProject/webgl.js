var x, y, z, a, b, c, dt;
var points;

function setup(){
    createCanvas(600, 600, WEBGL);

    points = [];

    x = 0.01;
    y = 0;
    z = 0;

    a = 10;
    b = 28;
    c = 8/3;

    dt = 0.015;

}

function draw(){
    var dx = (a * (y - x)) * dt;
    var dy = (x * (b - z) - y) * dt;
    var dz = (x * y - c * z) * dt;

    x += dx;
    y += dy;
    z += dz;

    background(0);
    fill(255);
    point(100, 100, 0);
}

function mousePressed(){
    setup();
}