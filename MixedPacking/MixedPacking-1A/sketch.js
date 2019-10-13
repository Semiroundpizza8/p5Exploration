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
      r: random(1, 20)
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
        circle.x < x1 + circle.r || circle.x > x2 - circle.r * 3 ||
        circle.y < y1 + circle.r || circle.y > y2 - circle.r * 3) {
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
        stroke(255, 0, 150, sat);
        line(circle.x, circle.y + (circle.r * 2), circle.x + (circle.r * 2), circle.y)
        break;
      case 1:
        stroke(150, 0, 255, sat);
        line(circle.x, circle.y + (circle.r * 2), circle.x + (circle.r * 2), circle.y)
        break;
      case 2:
        stroke(55, 55, 55, sat);
        line(circle.x, circle.y, circle.x + (circle.r * 2), circle.y + (circle.r * 2))

        break;
      case 3:
        stroke(150, 150, 150, sat);
        line(circle.x, circle.y, circle.x + (circle.r * 2), circle.y + (circle.r * 2))
        break;
    }
    strokeWeight(4)

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

  circleFill(100, 420, 100, 420, 300);
  circleFill(400, 600, 200, 400, 100);
  circleFill(200, 400, 400, 600, 100);
  circleFill(380, 700, 380, 700, 300);
}

function mouseClicked() {
  saveCanvas('Line', 'jpeg')
}

function draw() {
  // put drawing code here

}





/*

1. Generate circles in grid
2. Decay circles as x increased and y decreases
3. Use Fill Algo to take up space between


O .. .. ...
O . ... . .
O O.O. ...
O O O O. .
O.O.O.O O.

*/