//------------------------

let circles = [];
let newCircles = [];
function createCircles(radius, numberOfCircles, containerR) {
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
      let dMid = dist(circle.x, circle.y, width/2, height/2);
      // if distance < radius1+radius2
      if (d < circle.r + madeCircle.r ||
          dMid > containerR - circle.r) {
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
    let hue = map(circle.y, circle.r, height - circle.r, 0, 100);
    let sat = map(circle.x, circle.r, width - circle.r, 0, 50);
    fill(0 + hue + random(-30, 10), 15 + sat, 70);
    if(circle.r === 49) {
      noFill();
    }
    ellipse(circle.x, circle.y, circle.r * 2, circle.r * 2);
  }

  newCircles = [];
}

function setup() {
  // put setup code here
  createCanvas(1028, 1028);
  colorMode(HSB, 360, 100, 100, 1.0);
  background(100);
  // createCircles(100, 3);
  // createCircles(75, 3);
  // createCircles(49, 6);
  // createCircles(50, 10, 100);
  // createCircles(25, 20);
  createCircles(10, 400, 700);
  createCircles(6, 400, 600);
  createCircles(4, 4000, 400);
  createCircles(2, 4000, 300);
}

function mouseClicked() {
  saveCanvas('Circle4A', 'jpeg')
}

function draw() {
  // put drawing code here
}