//------------------------

let circles = [];
let newCircles = [];

function setup() {
  // put setup code here
  createCanvas(514, 514);
  colorMode(HSB, 360, 100, 100, 1.0);
  background(90);
  var masterCircle = new Circle(width/2, height/2, 250);
  masterCircle.run();
}

function draw() {
  // put drawing code here
}