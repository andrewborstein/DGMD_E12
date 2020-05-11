// Unit used to calculate garden size in pixels, relative to feet
let unit = defaultUnit()

// Global stroke weight
let weight = 4

// Static object containing info about each plant's constraints
let plantList = {
  arugula: { height: 1/4, width: 1/4 },
  beansBush: { height: 1/2, width: 1/2 },
  beansPole: { height: 1/2, width: 1/2 },
  brusselsSprouts: { height: 1, width: 1 },
  cabbage: { height: 1, width: 1 },
  carrots: { height: 1/4, width: 1/4 },
  cauliflower: { height: 1, width: 1 },
  celery: { height: 1/2, width: 1/2 },
  cucumber: { height: 1, width: 1 },
  eggplant: { height: 1, width: 1 },
  garlic: { height: 1/4, width: 1/4 },
  kale: { height: 1/2, width: 1/2 },
  leeks: { height: 1/3, width: 1/2 },
  lettuce: { height: 1/5, width: 1/5 },
  onion: { height: 1/3, width: 1/3 },
  parsnip: { height: 1/3, width: 1/3 },
  pepper: { height: 1, width: 1 },
  spinach: { height: 1/3, width: 1/3 },
  squash: { height: 1, width: 1},
  tomato: { height: 1, width: 1},
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
  strokeWeight(weight);
  stroke(51);
  fill(255);

  let gardenWidth = (gardenXFeet * unit) + (gardenXFeet * weight);
  let gardenHeight = (gardenYFeet * unit) + (gardenYFeet * weight);
  let controlsHeight = 25

  let gardenXStart = (windowWidth - gardenWidth) / 2;
  let gardenXEnd = gardenXStart + gardenWidth;

  let gardenYStart = ((windowHeight - gardenHeight) / 2) + controlsHeight;
  let gardenYEnd = gardenYStart + gardenHeight;

  let step = unit + weight

  rect(gardenXStart, gardenYStart, gardenWidth, gardenHeight);

  // Draw vertical lines
  for (let x = gardenXStart + step; x < gardenXEnd; x += step) {
    line(x, gardenYStart, x, gardenYEnd);
  }

  // Draw horizontal lines
  for (let y = gardenYStart + step; y < gardenYEnd; y += step) {
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
  plant = new Draggable(start, start, info.width, info.height, plant, unit);

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
  gardenXFeet = parseInt(gardenWidthSelect.value());
  gardenYFeet = parseInt(gardenHeightSelect.value());

  // reset the unit to the default
  unit = defaultUnit()

  // Change the unit size if the garden wont fit vertically
  let maxHeight = window.innerHeight - 200
  let gardenWontFit = (gardenYFeet * unit) > maxHeight;
  if (gardenWontFit) {
    unit = maxHeight / gardenYFeet;
  }

  // Update garden unit size, so plant size can adjust
  garden.forEach(function (plant) {
    let info = plantList[plant.name];
    plant.update(info.width, info.height, unit);
  });
}
