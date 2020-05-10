// Unit used to calculate garden size in pixels, relative to feet
let unit = window.innerWidth * 0.085 // roughly 100px

// Static object containing info about each plant's constraints
let plantList = {
  'arugula': { height: (unit/4), width: (unit/4), color: '#000' },
  'beans, bush': { height: (unit/2), width: (unit/2), color: '#000' },
  'beans, pole': { height: (unit/2), width: (unit/2), color: '#000' },
  'brussels sprouts': { height: unit, width: unit, color: '#000' },
  'cabbage': { height: unit, width: unit, color: '#000' },
  'carrots': { height: (unit/4), width: (unit/4), color: '#000' },
  'cauliflower': { height: unit, width: unit, color: '#000' },
  'celery': { height: (unit/2), width: (unit/2), color: '#000' },
  'cucumber': { height: (unit), width: (unit), color: '#000' },
  'eggplant': { height: unit, width: unit, color: '#000' },
  'garlic': { height: (unit/4), width: (unit/4), color: '#000' },
  'kale': { height: (unit/2), width: (unit/2), color: '#000' },
  'leeks': { height: (unit/6), width: (unit/6), color: '#000' },
  'lettuce': { height: (unit/5), width: (unit/5), color: '#000' },
  'onion': { height: (unit/9), width: (unit/9), color: '#000' },
  'parsnip': { height: (unit/9), width: (unit/9), color: '#000' },
  'pepper': { height: unit, width: unit, color: '#000' },
  'spinach': { height: (unit/9), width: (unit/9), color: '#000' },
  'squash': { height: unit, width: unit, color: 'yellow' },
  'tomato': { height: unit, width: unit, color: 'red' }
}

let gardenXSelect
let gardenYSelect

// Get this data from user input
let plantSelections = [];

// Create the garden based on plant selections
let garden = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  gardenXSelect = select('#gardenWidth')
  gardenYSelect = select('#gardenHeight')

  // add a button that will add plants to the holding area
  let plantButton = select('#addPlantButton');
  // plantButton.mousePressed(addPlant)

  // select the select
  let plantSelect = select('#selectPlant')
  // when the user adds a plant, do stuff
  plantButton.mousePressed(function (){
    let selection = plantSelect.value()

    if (!selection) return

    plantSelections.push(selection)
    plantTheGarden(selection)
  })

  resizeGarden()

  // change the size of the garden if new values are selected
  gardenXSelect.changed(resizeGarden)

  // change the size of the garden if new values are selected
  gardenYSelect.changed(resizeGarden)
}


function draw() {
  background(200);

  // draw the garden area
  strokeWeight(4);
  stroke(51);
  fill(255)

  let gardenWidth = gardenXFeet * unit
  let gardenHeight = gardenYFeet * unit

  let gardenXStart = (windowWidth - gardenWidth) / 2
  let gardenXEnd = gardenXStart + gardenWidth

  let gardenYStart = (windowHeight - gardenHeight) / 2
  let gardenYEnd = gardenYStart + gardenHeight

  rect(gardenXStart, gardenYStart, gardenWidth, gardenHeight)

  // Draw vertical lines
  for (let x = (gardenXStart + unit); x < gardenXEnd; x += unit) {
    line(x, gardenYStart, x, gardenYEnd)
  }

  // Draw horizontal lines
  for (let y = (gardenYStart + unit); y < gardenYEnd; y += unit) {
    line(gardenXStart, y, gardenXEnd, y)
  }

  // methods from Draggable
  garden.forEach(function (plant) {
    plant.over();
    plant.update();
    plant.show();
  })
}

function mousePressed() {
  garden.forEach(function (plant) {
    plant.pressed();
  })
}

function mouseReleased() {
  garden.forEach(function (plant) {
    plant.released();
  })
}

// adding new plants chosen by user to the page
function plantTheGarden(selection) {

  // plantSelections.forEach(function (selection) {
  //   plantInfo = plantList[selection]
  //   plant = new Draggable(x, y, plantInfo.width, plantInfo.height, plantInfo.color)
  //
  //   garden.push(plant)
  //
  //   // x += 10
  //   // y += 10
  // })

  let start = unit / 2

  plantInfo = plantList[selection]
  plant = new Draggable(start, start, plantInfo.width, plantInfo.height, plantInfo.color)

  garden.push(plant)

  // x += 10
  // y += 10
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function resizeGarden() {
  gardenXFeet = parseInt(gardenXSelect.value()) 
  gardenYFeet = parseInt(gardenYSelect.value())

  unit = window.innerWidth * 0.085
  let gardenWontFit = unit * gardenYFeet > window.innerHeight
  if (gardenWontFit) {
    unit = window.innerHeight / (gardenYFeet + 2)
  }
}
