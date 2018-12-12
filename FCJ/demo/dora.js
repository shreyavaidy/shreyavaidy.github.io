function Dora(){
  this.y = 2*(height/3);
  this.x = 25;

  this.gravity = 0.2;
  this.velocity = 0;

  this.show = function() {
    fill(255);
    ellipse(this.x, this.y, 16, 16);
  }

  this.move = function(){
    this.velocity += - this.gravity;
  }

  this.update = function(){
    this.velocity += this.gravity;
    this.y += this.velocity;

    if (this.y > height){
      this.y = height;
      this.velocity = 0;
    }

  if (this.y <0){

  }
  }
}

