function Circle(x, y, radius, level) {
  this.x = x;
  this.y = y;
  this.r = radius;
  this.children = [];
  this.level = level || 0;
}

Circle.prototype.run = function () {
  this.draw();
  let newRadius = this.r * 0.5;
  while (newRadius > 4) {
    this.createChildren(newRadius);
    newRadius = newRadius * 0.75;
  }
  for (var i=0; i<this.children.length; i++) {
      this.children[i].run();
  }
};

Circle.prototype.draw = function () {
  noStroke();
  let hue = map(this.y, this.r, height - this.r, 0, 100);
  let sat = map(this.x, this.r, width - this.r, 0, 50);
  let rand = Math.floor(random(0, 4));
  if (rand % 4 === 0) {
    fill(100)
  } else if (rand % 4 === 1) {
    fill(0)
  } else if (rand % 4 === 2) {
    fill(50 + hue + random(-30, 10), 15 + sat, 70);
  } else {
    fill(0 + hue + random(-30, 10), 15 + sat, 70);
  }
  ellipse(this.x, this.y, this.r * 2, this.r * 2);
};

Circle.prototype.createChildren = function (newRadius) {
  // Guards from infinite loops
  var guard = 10000;
  while (guard > 0 || this.r < 4) {

    // Overlap flag
    var overlapping = false;
    // Defines potential child circle
    var betaCircle = {
      x: random(this.x - this.r + newRadius, this.x + this.r - newRadius),
      y: random(this.y - this.r + newRadius, this.y + this.r - newRadius),
      r: newRadius,
      level: this.level + 1,
    }

    // Checks distance from all other circles
    for (var j = 0; j < this.children.length; j++) {
      let sibiling = this.children[j];
      let dSib = dist(betaCircle.x, betaCircle.y, sibiling.x, sibiling.y);
      // if distance < radius1+radius2
      if (dSib < betaCircle.r + sibiling.r) {
        overlapping = true;
        break;
      }
    }
    var dMid = dist(betaCircle.x, betaCircle.y, this.x, this.y);
    if (dMid > this.r - betaCircle.r) {
      overlapping = true;
    }
    // If it occupies an empty space
    if (!overlapping) {
      let dMid = dist(betaCircle.x, betaCircle.y, this.x, this.y);
      this.children.push(new Circle(betaCircle.x, betaCircle.y, betaCircle.r, betaCircle.level));
    } else {
      guard--;
    }
  }
}