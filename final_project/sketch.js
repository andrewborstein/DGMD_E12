let horizontalLength
let verticalLength

// Static object containing info about each plant's constraints
let plantList = {
  'arugula': { height: (100/4), width: (100/4), color: '#000' },
  'beans, bush': { height: (100/2), width: (100/2), color: '#000' },
  'beans, pole': { height: (100/2), width: (100/2), color: '#000' },
  'brussels sprouts': { height: 100, width: 100, color: '#000' },
  'cabbage': { height: 100, width: 100, color: '#000' },
  'carrots': { height: (100/4), width: (100/4), color: '#000' },
  'cauliflower': { height: 100, width: 100, color: '#000' },
  'celery': { height: (100/2), width: (100/2), color: '#000' },
  'cucumber': { height: (100), width: (100), color: '#000' },
  'eggplant': { height: 100, width: 100, color: '#000' },
  'garlic': { height: (100/4), width: (100/4), color: '#000' },
  'kale': { height: (100/2), width: (100/2), color: '#000' },
  'leeks': { height: (100/6), width: (100/6), color: '#000' },
  'lettuce': { height: (100/5), width: (100/5), color: '#000' },
  'onion': { height: (100/9), width: (100/9), color: '#000' },
  'parsnip': { height: (100/9), width: (100/9), color: '#000' },
  'pepper': { height: 100, width: 100, color: '#000' },
  'spinach': { height: (100/9), width: (100/9), color: '#000' },
  'squash': { height: 100, width: 100, color: 'yellow' },
  'tomato': { height: 100, width: 100, color: 'red' }
}

// Get this data from user input
let plantSelections = [];

// Create the garden based on plant selections
let garden = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  //add a button that will add plants to the holding area
  let plantButton = select('#addPlantButton');
  // plantButton.mousePressed(addPlant)

  //select the select
  let plantSelect = select('#selectPlant')
  //when the user adds a plant, do stuff
  plantButton.mousePressed(function (){
    let selection = plantSelect.value()

    if (!selection) return

    plantSelections.push(selection)
    plantTheGarden(selection)
  })

  //select the horizontalLength select
  horizontalLength = parseInt(select('#horizontalLength').value())
  //when the user changes the length, do stuff
  // plantButton.mousePressed(function (){
  //   let selection = plantSelect.value()
  //
  //   if (!selection) return
  //
  //   plantSelections.push(selection)
  //   console.log(plantSelections)
  //   plantTheGarden(selection)
  // })
  console.log(horizontalLength)

  //select the verticalLength select
  verticalLength = parseInt(select('#verticalLength').value())
  //when the user changes the length, do stuff
  // plantButton.mousePressed(function (){
  //   let selection = plantSelect.value()
  //
  //   if (!selection) return
  //
  //   plantSelections.push(selection)
  //   console.log(plantSelections)
  //   plantTheGarden(selection)
  // })
  console.log(verticalLength)

}

function draw() {
  background(200);

//draw the garden area
  strokeWeight(4);
  stroke(51);
  fill(255)


  rect(windowWidth/10, 200, horizontalLength*100, verticalLength*100)

  for (let step = (windowWidth/10+100); step < horizontalLength*100+100; step += (100)) {
    line(step,200,step,200+(verticalLength*100))
    // Runs 5 times, with values of step 0 through 4.
  }

  for (let step = (200); step < verticalLength*100+100; step += 100) {
    line((windowWidth/10),step,(windowWidth/10+(horizontalLength*100)),step)
    // Runs 5 times, with values of step 0 through 4.
  }

//methods from Draggable
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

//adding new plants chosen by user to the page
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
  plant = new Draggable(50, 50, plantInfo.width, plantInfo.height, plantInfo.color)

  garden.push(plant)

  // x += 10
  // y += 10
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
