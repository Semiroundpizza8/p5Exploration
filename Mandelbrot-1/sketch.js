function setup() {
  // put setup code here
  createCanvas(514, 514);
  pixelDensity(1);
  loadPixels();
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < width; y++) {
      // A values relative to X
      let a = map(x, 0, width, -1, 1);
      // B values relative to Y
      let b = map(y, 0, height, -1, 1);

      let ca = a;
      let cb = b;

      let n = 0;
      let z = 0;

      while (n < 100) {
        // real component (z^2)
        var aa = a * a - b * b;
        // complex component
        var bb = 2 * a * b;
        //  z^2+ c
        a = aa + ca;
        b = bb + cb;

        if (abs(a + b) > 16) {
          break;
        }

        n++;
      }

      var bright = map(n, 0, 100, 0, 255);

      let pix = (x + y * width) * 4;
      pixels[pix + 0] = bright;
      pixels[pix + 1] = bright;
      pixels[pix + 2] = bright;
      pixels[pix + 3] = 255;
    }
  }
  updatePixels();
}

function draw() {
  // put drawing code here
}