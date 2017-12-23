let pastLine = [];
let currLine = [];
let circles = [];

let circleFill = (x1, x2, y1, y2) => {
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
    circles.push({x:width/2,
                  y: height/2,
                  r: 5})
    // Checks distance from all other circles
    for (var j = 0; j < circles.length; j++) {
      let madeCircle = circles[j];
      let d = dist(circle.x, circle.y, madeCircle.x, madeCircle.y);
      // if d < r1+r2
      if (d < circle.r + madeCircle.r ||
          circle.x < x1 + circle.r || circle.x > x2 - circle.r*3 ||
          circle.y < y1 + circle.r || circle.y > y2 - circle.r*3) {
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
        fill(255, 0, 150);
        break;
      case 1:
        fill(150, 0, 255);
        break;
      case 2:
        fill(55, 55, 55);
        break;
      case 3:
        fill(150, 150, 150);
        break;
    }
    noStroke();
    ellipse(circle.x, circle.y, circle.r * 2, circle.r * 2);
  }
}

function setup() {
  // // put setup code here
  createCanvas(771, 771);
  background(255);
  let r = 2;
  stroke(200);
  noFill();
  for (i = 20; i < width - 20; i = i + 2) {
    for (j = 20; j < height; j++) {
      if(currLine.length < 366) {
        currLine.push(i);
      } else {
        let pastPoint = currLine.shift();
        let newX = pastPoint + noise(j) * 2 + (i/3)
        ellipse(j, height-newX, r, r);
        currLine.push(newX);
      }
    }
  }
  fill(150, 0, 255);
  noStroke();
  circleFill(100, 700, 100, 700);
}

function draw() {
  // put drawing code here

}
