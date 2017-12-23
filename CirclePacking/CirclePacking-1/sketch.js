//------------------------

let circles = [];

function setup() {
  // put setup code here
  createCanvas(514, 514);

  // Guards from infinite loops
  var guard = 0;
  while (circles.length < 50000) {

    // Overlap flag
    var overlapping = false;

    var circle = {
      x: random(width),
      y: random(height),
      r: random(2, 76)
    }

    // Checks distance from all other circles
    for (var j = 0; j < circles.length; j++) {
      let madeCircle = circles[j];
      let d = dist(circle.x, circle.y, madeCircle.x, madeCircle.y);
      // if d < r1+r2
      if (d < circle.r + madeCircle.r) {
        overlapping = true;
        break;
      }
    }

    if (!overlapping) {
      circles.push(circle);
    }

    guard++;
    if (guard > 100000) {
      break;
    }
  }

  for (var k = 0; k < circles.length; k++) {
    let circle = circles[k];
    switch (k % 4) {
      case 0:
        fill(255, 0, 150, 100);
        break;
      case 1:
        fill(150, 0, 255, 100);
        break;
      case 2:
        fill(55, 55, 55, 100);
        break;
      case 3:
        fill(150, 150, 150, 100);
        break;
    }
    noStroke();
    ellipse(circle.x, circle.y, circle.r * 2, circle.r * 2);
  }
}

function draw() {
  // put drawing code here
}