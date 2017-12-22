//------------------------

let circles = [];
let newCircles = [];

function setup() {
  // put setup code here
  createCanvas(514, 514);
  colorMode(HSB, 360, 100, 100, 1.0);
  background(90);
  // var masterCircle = new Circle(width/2, height/2, 250);
  // masterCircle.run();
  circles.push(new Circle(width/4, height/4, width/2))
  circles.push(new Circle(width*3/4, height/4, width/2))
  circles.push(new Circle(width/4, height*3/4, width/2))
  circles.push(new Circle(width*3/4, height*3/4, width/2))
  circles.forEach(circle =>
    circle.run()
  )
}

function mouseClicked() {
  saveCanvas('Circle4C', 'jpeg')
}

function draw() {
  // put drawing code here
}