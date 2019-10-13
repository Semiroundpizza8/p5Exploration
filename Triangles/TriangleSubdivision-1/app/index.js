/**
 * Application entry point
 */

// Load application styles
import "styles/index.scss";
import p5 from "p5";
import dat from "dat.gui";
import Stats from "stats-js";

// ================================
// START YOUR APP HERE
// ================================

// P5.js experiment boilerplate

// plug in Stats;
var stats = new Stats();
stats.setMode(0);
document.body.appendChild(stats.domElement);

var globals = {
  maxSplit: 12,
  margin: 0.05,
  oddsToStop: 0.01,
  gaussMean: 0.5,
  gaussD: 0.1
}

// plug in dat.GUI
window.onload = function() {
  var gui = new dat.GUI();
  gui.add(globals, "maxSplit", 0, 20);
  gui.add(globals, "gaussMean", 0.25, 0.75);
  gui.add(globals, "gaussD", 0, 0.5);
  gui.add(globals, "margin", 0, 1);
  gui.add(globals, "oddsToStop", 0, .5);
};

// -----------------------------

const sketch = p5 => {
  var {margin, gaussMean, gaussD} = globals
  // Variables scoped within p5
  const canvasWidth = window.innerWidth;
  const canvasHeight = window.innerHeight;

  // make library globally available
  window.p5 = p5;

  // Helper Functions
  const makePoint = (x, y) => ({x, y});
  const top = canvasHeight * margin
  const left = canvasWidth * margin
  const bottom = canvasHeight * (1 - margin)
  const right = canvasWidth * (1 - margin)

  const getRandomPoint = (p1, p2) => {
    // Ax + By = C
    let A = p1.y - p2.y
    let B = p2.x - p1.x
    let C = A*p1.x + B*p1.y
    let minX = p1.x < p2.x ? p1.x : p2.x
    let maxX = p1.x > p2.x ? p1.x : p2.x
    let minY = p1.y < p2.y ? p1.y : p2.y
    let maxY = p1.y > p2.y ? p1.y : p2.y
    let modifier = p5.randomGaussian(0.5, gaussD);
    // let modifier = .5;
    let randomX = ((maxX - minX) * modifier) + minX;

    // If B ends up being 0, use a random point instead
    let randomY = B == 0 ?
      ((maxY - minY) * modifier) + minY :
      (C - (A * randomX)) / B

    return {
      x: randomX,
      y: randomY
    }
  }

  const splitTriange = (p1, p2, p3, timesCalled=0, color = "BLACK") => {
    var {maxSplit, oddsToStop} = globals;
    // Get random point between two items
    const mid = getRandomPoint(p2, p3)

    // Draw from A to Midpoint
    p5.stroke(color)
    p5.line(p1.x, p1.y, mid.x, mid.y );

    // Recurse if needed
    if(timesCalled < maxSplit && Math.random() > oddsToStop * timesCalled) {
      splitTriange(mid, p1, p2, timesCalled + 1, "BLACK");
      splitTriange(mid, p1, p3, timesCalled + 1, "BLACK");
    }
  }

  // Setup function
  // ======================================
  p5.setup = () => {
    let canvas = p5.createCanvas(canvasWidth, canvasHeight);
  };

  
  // Draw function
  // ======================================
  p5.draw = () => {
    // p5.noLoop()
    p5.frameRate(1)
    p5.strokeWeight(1)
    p5.background("#DDD");
    const a = makePoint(left, top);
    const b = makePoint(right, top);
    const c = makePoint(left, bottom);
    const d = makePoint(right, bottom);
    // Draw Upper Triangle
    p5.line(a.x, a.y, b.x, b.y);
    p5.line(b.x, b.y, c.x, c.y);
    p5.line(a.x, a.y, c.x, c.y);

    splitTriange(a, b, c);

    // Draw Lower Triangle
    p5.stroke("BLACK")
    p5.line(d.x, d.y, b.x, b.y);
    p5.line(d.x, d.y, c.x, c.y);

    splitTriange(d, b, c);
  };
};

new p5(sketch);

export default sketch;
