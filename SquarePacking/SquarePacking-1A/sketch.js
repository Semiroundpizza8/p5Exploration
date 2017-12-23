//------------------------

let circles = [];
let squares = [];
let newCircles = [];

function setup() {
  // put setup code here
  createCanvas(514, 514);
  colorMode(HSB, 360, 100, 100, 1.0);
  background(100);
  // var masterCircle = new Circle(width/2, height/2, 250);
  // masterCircle.run();
  squares.push(new Square(width/4, height/4, width/4))
  squares.push(new Square(width*3/4, height/4, width/4))
  squares.push(new Square(width/4, height*3/4, width/4))
  squares.push(new Square(width*3/4, height*3/4, width/4))
  squares.push(new Square(width/2, height/2, width/3))
  squares.forEach(square =>
    square.run()
  )
}

function draw() {
  // put drawing code here
}