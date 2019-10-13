//------------------------

let circles = [];

function setup() {
  // put setup code here
  createCanvas(514, 514);
  colorMode(HSB, 360, 100, 100, 1.0);
  background(90);
  while (circles.length < 100) {
    let radius = 110 - circles.length;
    let xPosition = radius + random(width - radius * 2);
    let yPosition = radius + random(height - radius * 2);
    let currentCircle = new Circle(xPosition, yPosition, radius);
    if (currentCircle.isOverlapping()) circles.push(currentCircle);
  }
}

function mouseClicked() {
  saveCanvas('Circle2A', 'jpeg');
}

function draw() {
  // put drawing code here
}

function Circle(xSize, ySize, radius) {
  this.x = xSize
  this.y = ySize
  this.r = radius

  this.isOverlapping = function () {
    // Overlap flag
    var overlapping = false;
    var guard = 0;

    // Checks distance from all other circles
    for (var j = 0; j < circles.length; j++) {
      let madeCircle = circles[j];
      let d = dist(this.x, this.y, madeCircle.x, madeCircle.y);
      // if distance < radius1+radius2
      if (d < this.r + madeCircle.r) {
        overlapping = true;
        break;
      }
    }

    // If it occupies an empty space
    if (!overlapping) {
      circles.push(this);
      return true;
    } else {
      guard++;
      if (guard > 1000) {
        return false;
      }
    }
  }
  this.draw = function () {
    console.log('here');
    noStroke();
    let hue = map(this.y, this.r, height - this.r, 0, 100);
    fill(200 + hue, 30, 70);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }
}