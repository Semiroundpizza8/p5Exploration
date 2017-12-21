let pastLine = [];
let currLine = [];

function setup() {
  // put setup code here
  createCanvas(771, 771);
  background(255);
  let r = 2;
  stroke(255, 0, 150);
  noFill();
  for (i = 20; i < width - 20; i = i + 2) {
    for (j = 20; j < height; j++) {
      if(currLine.length < 366) {
        ellipse(i, j * 2, r, r);
        currLine.push(i);
      } else {
        let pastPoint = currLine.shift();
        let newX = pastPoint + noise(j) * 2 + (i/3)
        ellipse(newX, j, r, r);
        currLine.push(newX);
      }
    }
  }
  fill(150, 0, 255);
  noStroke();
  ellipse(height/2, width/2, 600, 600);
}

function draw() {
  // put drawing code here

}