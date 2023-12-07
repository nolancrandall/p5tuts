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
cloud1 = 0
speed = 3
change = 0
altitude = 50
var stars = []
function setup() {
  createCanvas(1920, 963);
  for (var s = 0; s < 500; s++){
    stars[s] = [random(0, width), random(0, height)]

  }
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
  // stars during night time
  
  w = random(3, 3)
  fill(255,226,52, a - random(20, 80))
  for (var s = 0; s < 500; s ++) {
    
    stroke(255,226,52, a - random(20, 80))
    ellipse(stars[s][0], stars[s][1], w, w);    
    
  }
  stroke(140 - a, 150 - a, 140 - a)
  fill(185 - a, 195 - a, 185 - a, 200)
  beginShape();
  for(let v = 0; v < TWO_PI; v+= .005) {
      let xoff = cos(v) + 1 + change;
      let yoff = sin(v) + 1 + change;
      let r = map(noise(xoff, yoff), .5, .8, 150, 100);
      let x = r * cos(v) + 50;
      let y = r * sin(v) / 2 + altitude;
      vertex(x + cloud1, y);

  }
  endShape(CLOSE);

  fill(60, 100, 50);
  beginShape();
  var xoff = start
  for (var x = 0; x < width; x ++) {
    for (var i = 0; i < 13; i += 1){
      stroke(60, 100, 50);
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






  // cloud code
  // fill(84, 84, 84, 230);
  // beginShape();
  // for(let v = 0; v < TWO_PI; v+= .01) {
  //   let r = random(50, 100);
  //   let x = r * cos(a);
  //   let y = r * sin(a);
  //   vertex(x, y);

  // }
  // endShape();


  // noStroke();
  // ellipse(h, l, 120, 70);
  // ellipse(h - 43, l, 76, 45);
  // ellipse(h + 51, l, 65, 35);
  // h += 0.5;



  if(frameCount % 9 == 0){
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

  cloud1 += speed
  if(cloud1 > 2300){
    cloud1 = -200;
    change += 1;
    altitude = random(100, 500);
  }
  
  console.log(cloud1)




  // noLoop();

}
