//------------------------

let circles = [];
let newCircles = [];

function setup() {
  // put setup code here
  createCanvas(514, 514);
  colorMode(HSB, 360, 100, 100, 1.0);
  background(80);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      circles.push(new Circle((100 * i)/ 3, (100 * i) / 3, height / 9));
    }
  }
  circles.forEach(circle => {
    circle.run();
  });
}

function mouseClicked() {
  saveCanvas('Circle4B', 'jpeg')
}

function draw() {
  // put drawing code here
}