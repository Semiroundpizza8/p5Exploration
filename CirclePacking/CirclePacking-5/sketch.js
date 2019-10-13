//------------------------

let circles = [];
let newCircles = [];

function setup() {
  // put setup code here
  createCanvas(728, 728);
  colorMode(HSB, 360, 100, 100, 1.0);
  background(250);
  var masterCircle = new Circle(width/2, height/2, 350);
  masterCircle.run();
}

function mouseClicked() {
  saveCanvas('Circle4E', 'jpeg')
}

function draw() {
  // put drawing code here
}