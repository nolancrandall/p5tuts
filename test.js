xoff = 0
cloud1 = 0
speed = 10
change = 0
function setup(){
    createCanvas(2000, 1000)
}
function draw() {
    background(0);

    beginShape();
    for(let v = 0; v < TWO_PI; v+= .005) {
        let xoff = cos(v) + 1 + change;
        let yoff = sin(v) + 1 + change;
        let r = map(noise(xoff, yoff), .5, .8, 150, 100);
        let x = r * cos(v) + 50;
        let y = r * sin(v) / 2 + 100;
        vertex(x + cloud1, y);
  
    }
    endShape(CLOSE);
    cloud1 += speed
    if(cloud1 > 1700){
        cloud1 = -200;
        change += 1;
    }
}


// * noise(xoff)