// Click and Drag an object
// Daniel Shiffman <http://www.shiffman.net>

class Draggable {
  constructor(x, y, w, h, plant, unit) {
    this.dragging = false; // Is the object being dragged?
    this.rollover = false; // Is the mouse over the ellipse?
    this.x = x;
    this.y = y;
    this.w = w * unit;
    this.h = h * unit;
    this.offsetX = 0;
    this.offsetY = 0;
    this.name = plant;
    this.plantImg = loadImage('icons/' + plant + '.svg');
    this.unit = unit;
  }

  over() {
    // Is mouse over object
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }
  }

  update(h, w, unit) {
    // Adjust location if being dragged
    if (this.dragging) {
      this.x = mouseX + this.offsetX;
      this.y = mouseY + this.offsetY;
    }

    if (unit) {
      console.log('unit', unit);
      // debugger
      this.w = w * unit;
      this.h = h * unit;
    }
  }

  show() {
    stroke(120);
    strokeWeight(1);
    // Different fill based on state
    if (this.dragging) {
      fill(220);
    } else if (this.rollover) {
      fill(240);
      stroke(100);
    } else {
      noFill();
    }
    
    rect(this.x, this.y, this.w, this.h);
    image(this.plantImg, this.x, this.y, this.w, this.h)
  }

  pressed() {
    // Did I click on the rectangle?
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      this.dragging = true;
      // If so, keep track of relative location of click to corner of rectangle
      this.offsetX = this.x - mouseX;
      this.offsetY = this.y - mouseY;
    }
  }

  released() {
    // Quit dragging
    this.dragging = false;
  }
}
