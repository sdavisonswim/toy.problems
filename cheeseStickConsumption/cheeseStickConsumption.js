// Cheese Stick Consumption
// Calculate the number of cheese sticks required to feed X amount of fellows.

// Every fellow needs 2 cheese sticks minimum. For every 5 fellows, an additional cheese stick is required per fellow.

function cheeseStickConsumption (numberOfFellows) {
  let cheeseSticks = (Math.floor(numberOfFellows/5) + 2 ) * numberOfFellows
  return cheeseSticks
}