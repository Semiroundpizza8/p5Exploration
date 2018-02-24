function Circle(xLocation, yLocation, radius) {
  this.x = xLocation;
  this.y = yLocation;
  this.r = radius;
}

Circle.prototype.draw = function () {
  noStroke();
  fill(90, 190, 20);
  ellipse(this.x, this.y, this.r * 2, this.r * 2);
} 
