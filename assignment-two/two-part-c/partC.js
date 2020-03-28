function setup() {
  createCanvas(700, 700);
}

function draw() {
  background(255);
  noFill();
  strokeWeight(2);

//get the time units
  let sec = second();
  let min = minute();
  let hours = hour();


//draw a circle every second
  let i=1;
  for(i; i <= sec; i++){
    let secCircle = map(i, 0, 60, 0, width);
    stroke("#F65058FF");
    ellipse(width/2,height/2,secCircle);
  };

//draw a square every minute
  let m=1;
  for(m; m <= min; m++){
    let minSquare = map(m, 0, 60, 0, width);
    stroke("#28334AFF");
    rectMode(RADIUS);
    rect(width/2,height/2,minSquare, minSquare);
  noFill();
}

//draw a rectangle every hour
  let h=1;
  for(h; h <= hours; h++){
    let hourRect = map(h, 0, 24, 0, width);
    stroke("#FBDE44FF");
    rect(width/2,height/2,hourRect, width);
  };

}
