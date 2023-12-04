// var xoff1 = 0;
// var xoff2 = 10000;
var start = 0;
var inc = .001;
var inc2 = .1;
var h = 100;
var l = 100;
a = 0
b = 100
c = 1
d = -1

function setup() {
  createCanvas(1920, 963);
}
function draw() {
// var x = map(noise(xoff1), 0, 1, 0, width);
// var y = map(noise(xoff2), 0, 1, 0, height);

// xoff1 += .02;
// xoff2 += .02;

//between 1 and 1.5
v = 50
v += inc2
rand = noise(v) / 2 
multi = 1 + rand
  background(130, 230, 250, b);
  fill(19,24,98, a);
  rect(0, 0, width, height)
//   ellipse(x, y, 20, 20);

  stroke(255);
  fill(60, 100, 50);
  beginShape();
  var xoff = start
  for (var x = 0; x < width; x ++) {
    for (var i = 0; i < 13; i += 1){
      stroke(66, 105, 47);
      var y = noise(xoff) * height * multi;
      vertex(x + i, y);
      xoff += .003;
    }
  }
  vertex(1920, 963);
  vertex(0, 963);
  
  vertex(0, noise(xoff) * height);
  endShape();
  // fill(255, 255, 255)
  // noStroke();
  // rect(0, noise(xoff) * height, 2000, 800);
  start += inc
  inc2 += .002

  fill(84, 84, 84, 230);
  noStroke();
  ellipse(h, l, 120, 70);
  ellipse(h - 43, l, 76, 45);
  ellipse(h + 51, l, 65, 35);
  h += 0.5;

  if(frameCount % 5 == 0){
  a += c
  b += d
  }
  if(a > 100) {
    c *= -1
    d *= -1
  }
  if(a < 1){
    c *= -1
    d *= -1
  }




  // noLoop();

}
