// Static object containing info about each plant's constraints
let plantList = {
  'arugula': {
    height: (100/4), width: (100/4), color: '#000'
  },
  'beans, bush': {
    height: (100/2), width: (100/2), color: '#000'
  },
  'beans, pole': {
    height: (100/8), width: (100/8), color: '#000'
  },
  'brussels sprouts': {
    height: 100, width: 100, color: '#000'
  },
  'cabbage': {
    height: 100, width: 100, color: '#000'
  },
  'carrots': {
    height: (100/16), width: (100/16), color: '#000'
  },
  'cauliflower': {
    height: 100, width: 100, color: '#000'
  },
  'celery': {
    height: (100/2), width: (100/2), color: '#000'
  },
  'cucumber': {
    height: (100), width: (100), color: '#000'
  },
  'eggplant': {
    height: 100, width: 100, color: '#000'
  },
  'garlic': {
    height: (100/4), width: (100/4), color: '#000'
  },
  'kale': {
    height: (100/2), width: (100/2), color: '#000'
  },
  'leeks': {
    height: (100/6), width: (100/6), color: '#000'
  },
  'lettuce': {
    height: (100/5), width: (100/5), color: '#000'
  },
  'onion': {
    height: (100/9), width: (100/9), color: '#000'
  },
  'parsnip': {
    height: (100/9), width: (100/9), color: '#000'
  },
  'pepper': {
    height: 100, width: 100, color: '#000'
  },
  'spinach': {
    height: (100/9), width: (100/9), color: '#000'
  },
  'squash': {
    height: 100, width: 100, color: 'yellow'
  },
  'tomato': {
    height: 100, width: 100, color: 'red'
  }
}


let x = 50
let y = 50

// Get this data from user input
let plantSelections = [];

// Create the garden based on plant selections
let garden = [];

function setup() {
  createCanvas(640, 360);

  //add a button that will add plants to the holding area
  let plantButton = select('#addPlantButton');
  // plantButton.mousePressed(addPlant)
  console.log(plantButton)

  //select the select
  let plantSelect = select('#selectPlant')
  plantButton.mousePressed(function (){
    let selection = plantSelect.value()

    if (!selection) return

    plantSelections.push(selection)
    console.log(plantSelections)
    plantTheGarden(selection)
  })
}

function draw() {
  background(255);

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

  plantInfo = plantList[selection]
  plant = new Draggable(x, y, plantInfo.width, plantInfo.height, plantInfo.color)

  garden.push(plant)

  // x += 10
  // y += 10
}
