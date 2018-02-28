var table;
var cValues = [];
var maxFloors, minFloors, maxCount, minCount;

// Display "Loading..." on the screen so we see something's happening
function preload(){
  table = loadTable('assets/EBE_data.csv', 'csv', 'header');
}

// In this sketch everything happens in setup
function setup() {
  createCanvas(windowWidth, windowHeight);
    translate(40,40);

  loadData();
}

function loadData() {
    var contractValue = table.getColumn("Job_Exp1_Value_of_Contract");
    maxContract = max(contractValue);
    minContract = min(contractValue);

  console.log("Max value of contracts in all: " + maxContract);
  console.log("Min value of contracts in all: " + minContract);

  // create array with size of all possible floor counts
  // each starting at value 0
  for(var i = 0; i < maxContract + 1; i++) {
    append(cValues, 0);
  }

  for(var i = 0; i < contractValue.length; i++){
    cValues[contractValue[i]]++;
  }

  mostRepeated = max(cValues)

  textSize(40);
  textStyle(BOLD);
  text("There are " + contractValue.length + " buildings in Manhattan.", 20,40);
  text("The lowest contract value is " + minContract + ", the highest is " + maxContract + ".", 20,85);
  text("The most common floor count is " + bldgCounts.indexOf(mostCommonFloorFreq) + ",\n  with " + mostCommonFloorFreq + " occurrences", 20,130);
}