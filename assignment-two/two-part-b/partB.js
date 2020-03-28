var pizzaPizza;
function preload() {
pizzaPizza = loadImage("pizzapizza.png");
}

function setup() {
  createCanvas(700, 700);
  //clockFont = loadFont("digital-7.ttf");
  angleMode(DEGREES);
  background(0);
}
function draw() {
  image(pizzaPizza, 0, 0);

  //create variables from the elements of time
  let secs = second();
  let mins = minute();
  let hours = hour();

  //display the time in text and remind everyone that it is pizza time.

  textSize(32);
  //textFont(clockFont);
  fill(255);
  textAlign(CENTER);
  stroke(0);
  strokeWeight(2);

  //add leading 0 for time units if they are less than 10
  function clockify(timeUnits){
    if (timeUnits < 10) {
      return "0" + timeUnits
    } else {
      return timeUnits
    }
  }
  // console.log(clockify(hours));

  // add 0 to the clock if the min or seconds are single digits
  let digitalClock = clockify(hours) + ":" + clockify(mins) + ":" + clockify(secs);
  text(digitalClock + " IS PIZZA TIME.", width/2, 50);

  //map the hour time to a variable for the hour hand on a 360 degree 12-hour clock
  let hoursHand = map(((hours % 12) + (mins/60)), 0, 12, 0, 360);

  //map the minutes time to a variable for the minute hand
  let minsHand = map(mins, 0, 60, 0, 360);

  //map the seconds time to a variable for the seconds hand
  let secsHand = map(secs, 0, 60, 0, 360);

// rotate the hours hand
  push();
  translate(350, 350);
  rotate(-90);
  rotate(hoursHand);
  stroke(0);
  strokeWeight(20);
  line(0, 0, 150, 0);
  pop();

// rotate the minutes hand
  push();
  translate(350, 350);
  rotate(-90);
  rotate(minsHand);
  stroke(0);
  strokeWeight(10);
  line(0, 0, 200, 0);
  pop();

// rotate the seconds hand
  push();
  translate(350, 350);
  rotate(-90);
  rotate(secsHand);
  stroke(255, 0, 0);
  strokeWeight(5);
  line(0, 0, 200, 0);
  pop();

}
