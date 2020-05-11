// Unit used to calculate garden size in pixels, relative to feet
let unit = defaultUnit()

// Static object containing info about each plant's constraints
let plantList = {
  arugula: { height: unit / 4, width: unit / 4, color: "#000" },
  beansBush: { height: unit / 2, width: unit / 2, color: "#000" },
  beansPole: { height: unit / 2, width: unit / 2, color: "#000" },
  brusselsSprouts: { height: unit, width: unit, color: "#000" },
  cabbage: { height: unit, width: unit, color: "#000" },
  carrots: { height: unit / 4, width: unit / 4, color: "#000" },
  cauliflower: { height: unit, width: unit, color: "#000" },
  celery: { height: unit / 2, width: unit / 2, color: "#000" },
  cucumber: { height: unit, width: unit, color: "#000" },
  eggplant: { height: unit, width: unit, color: "#000" },
  garlic: { height: unit / 4, width: unit / 4, color: "#000" },
  kale: { height: unit / 2, width: unit / 2, color: "#000" },
  leeks: { height: unit / 6, width: unit / 6, color: "#000" },
  lettuce: { height: unit / 5, width: unit / 5, color: "#000" },
  onion: { height: unit / 9, width: unit / 9, color: "#000" },
  parsnip: { height: unit / 9, width: unit / 9, color: "#000" },
  pepper: { height: unit, width: unit, color: "#000" },
  spinach: { height: unit / 9, width: unit / 9, color: "#000" },
  squash: { height: unit, width: unit, color: "yellow" },
  tomato: { height: unit, width: unit, color: "red" },
};


let bgImage, gardenWidthSelect, gardenHeightSelect, gardenXFeet, gardenYfeet;
let garden = [];

function setup() {
  // create full screen canvas
  createCanvas(windowWidth, windowHeight);

  // get the garden dimension data
  gardenWidthSelect = select("#gardenWidth");
  gardenHeightSelect = select("#gardenHeight");
  gardenXFeet = parseInt(gardenWidthSelect.value());
  gardenYFeet = parseInt(gardenHeightSelect.value());

  // when the user chooses a plant, add it to the garden
  select("#addPlantButton").mousePressed(function () {
    let plant = select("#selectPlant").value();

    if (plant) {
      addToGarden(plant);
    }
  });

  // change the size of the garden on page load and when new values are selected
  resizeGarden();
  gardenWidthSelect.changed(resizeGarden);
  gardenHeightSelect.changed(resizeGarden);

  bgImage = loadImage('./garden.jpg');
}

function draw() {
  background('#bfd1b8');

  // draw the garden area
  strokeWeight(4);
  stroke(51);
  fill(255);

  let gardenWidth = gardenXFeet * unit;
  let gardenHeight = gardenYFeet * unit;

  let gardenXStart = (windowWidth - gardenWidth) / 2;
  let gardenXEnd = gardenXStart + gardenWidth;

  let gardenYStart = (windowHeight - gardenHeight) / 2;
  let gardenYEnd = gardenYStart + gardenHeight;

  rect(gardenXStart, gardenYStart, gardenWidth, gardenHeight);

  // Draw vertical lines
  for (let x = gardenXStart + unit; x < gardenXEnd; x += unit) {
    line(x, gardenYStart, x, gardenYEnd);
  }

  // Draw horizontal lines
  for (let y = gardenYStart + unit; y < gardenYEnd; y += unit) {
    line(gardenXStart, y, gardenXEnd, y);
  }

  // methods from Draggable
  garden.forEach(function (plant) {
    plant.over();
    plant.update();
    plant.show();
  });
}

function mousePressed() {
  garden.forEach(function (plant) {
    plant.pressed();
  });
}

function mouseReleased() {
  garden.forEach(function (plant) {
    plant.released();
  });
}

// add new plant chosen by user to the page
function addToGarden(plant) {
  let start = unit / 2;
  let info = plantList[plant];
  plant = new Draggable(start, start, info.width, info.height, info.color, plant);

  garden.push(plant);
}

function windowResized() {
  // when the window is resized, resize our canvas and garden with it
  resizeCanvas(windowWidth, windowHeight);
  resizeGarden();
}

function defaultUnit() {
  return window.innerWidth * 0.085 // roughly 100px at 1200px wide screen
}

function resizeGarden() {
  // reset the unit to the default
  unit = defaultUnit()

  // Change the unit size if the garden wont fit vertically
  let gardenWontFit = gardenYFeet * unit > window.innerHeight;
  if (gardenWontFit) {
    unit = window.innerHeight / (gardenYFeet + 2);
  }
}
