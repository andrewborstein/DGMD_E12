let fortunes = ["YAAAASS KWEEN.", "Your future is lit, fam.", "Stay inside and wash your hands!", "100", "So much yes!", "You can haz cheezburger.", "y tho", "Swipe left.", "No because no.", "Hard pass.", "Live every week like it's shark week.", "Hard to say...let's all take a nap.", "Order a pizza if you're unsure."];
let canvas, canvasDiv, fortunesP;

function setup() {
  let canvas = createCanvas(400,400);
  canvas.style("z-index", "-1");
  background(220);
  fill(50);
  //your canvas should be relocated within another element on your page via parent() or child().
  canvasDiv = select('#eightBall');
  canvasDiv.child(canvas);
  //1. position() an element on the page using P5
  canvasDiv.style('position', 'relative');
  canvasDiv.style('text-align', 'center');

  let fortuneButton = select('#fortuneButton');
  //make use of at least one element-specific event handler and callback function:
  fortuneButton.mousePressed(newFortune)
}

function draw() {

    fill(0);
    ellipse(200, 200, 375, 375);
    fill(60, 0, 255);
    triangle(200, 104, 280, 280, 120, 280);
    fill(255);
}

//Change the value of the prediction on click and clear the last one
function newFortune() {
  let index = floor(random(fortunes.length));
  //2. create an element BESIDES a canvas element
  fortunesP = select('#fortunes');
  //3. use html() to modify the content of an element on the page
  fortunesP.html(fortunes[index]);
  //4. style() a DOM element with CSS from within P5
  fortunesP.style('color', 'add8e6');
  fortunesP.style('position', 'absolute');
  fortunesP.style('top', '51%');
  fortunesP.style('left', '50%');
  fortunesP.style('transform', 'translateX(-50%)');
  fortunesP.style('max-width', '80px');
};
