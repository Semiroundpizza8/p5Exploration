let pastLine = [];
let currLine = [];
let circles = [];

let circleFill = (x1, x2, y1, y2, sat) => {
  // Guards from infinite loops
  circles = [];
  var guard = 0;
  while (circles.length < 50000) {

    // Overlap flag
    var overlapping = false;

    var circle = {
      x: random(width),
      y: random(height),
      r: random(1, 100)
    }
    circles.push({
      x: width / 2,
      y: height / 2,
      r: 5
    })
    // Checks distance from all other circles
    for (var j = 0; j < circles.length; j++) {
      let madeCircle = circles[j];
      let d = dist(circle.x, circle.y, madeCircle.x, madeCircle.y);
      // if d < r1+r2
      if (d < circle.r + madeCircle.r ||
        circle.x < x1 + circle.r || circle.x > Math.abs(x2 - circle.r * 3) ||
        circle.y < y1 + circle.r || circle.y > Math.abs(y2 - circle.r * 3)) {
        overlapping = true;
        break;
      }
    }

    if (!overlapping) {
      circles.push(circle);
    }

    guard++;
    if (guard > 10000) {
      break;
    }
  }

  for (var k = 0; k < circles.length; k++) {
    let circle = circles[k];
    switch (k % 4) {
      case 0:
        fill(255, 0, 150, sat);
        break;
      case 1:
        fill(150, 0, 255, sat);
        break;
      case 2:
        fill(55, 55, 55, sat);
        break;
      case 3:
        fill(150, 150, 150, sat);
        break;
    }
    noStroke();
    // line(circle.x, circle.y, circle.x + (circle.r * 2), circle.y + (circle.r * 2))
    ellipse(circle.x, circle.y, circle.r * 2, circle.r * 2)
  }
}

function setup() {
  // // // put setup code here
  createCanvas(771, 771);
  background(255);
  let r = 2;
  stroke(220);
  noFill();
  for (i = 20; i < width - 20; i = i + 2) {
    for (j = 20; j < height; j++) {
      if (currLine.length < 366) {
        currLine.push(i);
      } else {
        let pastPoint = currLine.shift();
        let newX = pastPoint + noise(j) * 2 + (i / 3)
        ellipse(j, height - newX, r, r);
        currLine.push(newX);
      }
    }
  }

  for (let i = 0; i < 8; i++) {
    let x1 = random(0, width - 200);
    let y1 = random(0, height - 200);
    let x2 = random(x1 + 100, width);
    let y2 = random(y1 + 100, height);
    circleFill(x1, x2, y1, y2, i * 66);
  }

  // circleFill(100, 420, 100, 420, 300);
  // circleFill(400, 600, 200, 400, 100);
  // circleFill(200, 400, 400, 600, 100);
  // circleFill(380, 700, 380, 700, 300);
}

function mouseClicked() {
  saveCanvas('Line', 'jpeg')
}

function draw() {
  // put drawing code here

}
