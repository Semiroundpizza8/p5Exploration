var circles = [];

function setup() {
  // put setup code here
  createCanvas(514, 514);
  colorMode(HSB, 360, 100, 100, 1.0);
  background(90);

  circles.push(new Circle(height/2, width/2, 200));
}

function draw() {
  // put drawing code here
  // Create circles in middle
  circles.forEach(circle => {
    circle.draw();
  });
  // Allow circles to bounce (Initially on click)

  // Add frequency data for bounce

  // Change vectors to consider rotation
}