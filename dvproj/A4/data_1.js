var table;
var bldgCounts = [];
var maxFloors, minFloors, maxCount, minCount;

// Display "Loading..." on the screen so we see something's happening
function preload(){
  table = loadTable('EBE_data.csv', 'csv', 'header');
}

// In this sketch everything happens in setup
function setup() {
  createCanvas(windowWidth, windowHeight);
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
  for(var i = 0; i < maxFloors + 1; i++) {
    append(bldgCounts, 0);
  }

  // iterate through all floor counts and
  // count how many of each building type there are
  for(var i = 0; i < contractValue.length; i++){
    bldgCounts[contractValue[i]]++;
  }

  mostCommonFloorFreq = max(bldgCounts)

  // You could do drawing inside setup() like this, but this is
  // like noLoop() in that everything you write here goes on one frame.
  textSize(40);
  textStyle(BOLD);
  text("There are " + contractValue.length + " buildings in Manhattan.", 20,40);
  text("The lowest contract value is " + minContract + ", the highest is " + maxContract + ".", 20,85);
  text("The most common floor count is " + bldgCounts.indexOf(mostCommonFloorFreq) + ",\n  with " + mostCommonFloorFreq + " occurrences", 20,130);
}