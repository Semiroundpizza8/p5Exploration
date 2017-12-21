//------------------------

let circles = [];
let newCircles = [];

function createCircles(radius, numberOfCircles) {
  // Guards from infinite loops
  var guard = 0;
  for (var i = 0; i < numberOfCircles; i++) {
    // Overlap flag
    var overlapping = false;

    // Defines circles attributes
    var circle = {
      x: radius + random(width - radius * 2),
      y: radius + random(height - radius * 2),
      r: radius
    }

    // Checks distance from all other circles
    for (var j = 0; j < circles.length; j++) {
      let madeCircle = circles[j];
      let d = dist(circle.x, circle.y, madeCircle.x, madeCircle.y);
      // if distance < radius1+radius2
      if (d < circle.r + madeCircle.r) {
        overlapping = true;
        break;
      }
    }

    // If it occupies an empty space
    if (!overlapping) {
      circles.push(circle);
      newCircles.push(circle);
    } else {
      i--;
      guard++;
      if (guard > 10000) {
        break;
      }
    }

  }

  // Draws all new circles
  for (var k = 0; k < newCircles.length; k++) {
    let circle = newCircles[k];
    noStroke();
    let hue = map(circle.y, circle.r, height - circle.r, 0, 100)
    fill(200+hue+random(-20,20), 30, 70);
    ellipse(circle.x, circle.y, circle.r * 2, circle.r * 2);
  }

  newCircles = [];
}

function setup() {
  // put setup code here
  createCanvas(514, 514);
  colorMode(HSB, 360, 100, 100, 1.0);
  background(90);
  createCircles(75, 1);
  createCircles(50, 10);
  createCircles(25, 20);
  createCircles(10, 200);
  createCircles(5, 200);
  createCircles(2, 2000);
  createCircles(1, 2000);
}

function draw() {
  // put drawing code here
}