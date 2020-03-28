
let tally, clickCount, x,y;

function setup() {
  createCanvas(400, 400);
  stroke("#F65058FF");
  strokeWeight(3);
  background("#28334AFF");

}

clickCount = 0;

function mousePressed() {

  //count the number of clicks
  clickCount = clickCount + 1;
  tally = 0;

  //draw the tally marks on the canvas with a little bit of padding
  for(y = 30; y <= height-30; y += 50){

    for (x = 30; x <= width-30; x += 10){

      //draw a vertical line if there are 4 or fewer ticks; draw a diagonal otherwise
      if (tally < clickCount){
        tally++;

        if (tally % 5 == 0){
          line (x - 50, y + 20, x, y);
        } else {
          line(x, y, x, y + 20);
        }
      }
    }
  }
}
// clear tally marks on key press
function keyPressed() {
  clickCount = 0;
  tally = 0;
  clear();
  background("#28334AFF");
}
