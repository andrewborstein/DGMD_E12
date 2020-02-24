let sunG,sunB
let rayG, rayB

// let rayY = 50
// let rayX = 500

function setup() {
  createCanvas(1024, 768);
  noStroke();
  background(218, 202, 183);
  //sun = color(255, 209, 0);

}

function draw() {

  //make sun change color with mouse position
  noStroke()
  sunG = map(mouseX, 0, width, 0, 255);
  sunB = map(mouseY, 0, height, 0, 153);

  // draw sun
  fill(255, sunG, sunB);
  ellipseMode(CORNER);
  arc(620, 600, 400, 400, PI, TWO_PI, OPEN);


  //draw sun rays
  strokeWeight(50);
  stroke(255, 209, 0, 90)
  line(630, 760, 200, 760);
  line(820, 600, 820, 200);
  line(690, 650, 350, 320);
  line(950, 655, 1250, 320);
  line(1020, 760, 1200, 760);


  // draw mountains shape and top of mountain. change fill based on mouse click
  noStroke()
  if (mouseIsPressed) {
    fill(255, sunG, sunB);
  }
  else {
    fill(235, 60, 39);
  }
  beginShape();
  vertex(0,768);
  vertex(150, 300);
  vertex(310, 740);
  vertex(400, 468);
  vertex(500, 468);
  vertex(600, 768);
  endShape();

  stroke(51);
  strokeWeight(10)
  triangle(825, 200, 875, 100, 925, 200);

}
