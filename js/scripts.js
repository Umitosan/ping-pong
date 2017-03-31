// BACK-END business logic

// the masterFunk function takes a number and outputs a string containing all correct
//    numbers, pings, and pongs in the correct postions according to the specifications
var masterFunk = function(startNum) {
  let masterArray = [];
  // inform the user if their number is too high or low
  if ((startNum < 1) || (startNum > 100))  {
    masterArray = ["Hey crafty devil... try again using a number between 1 and 100."];
    return masterArray;
  }
  // loop determining which item to push into the array
  for (i = 1 ; i <= startNum ; i++) {
    if (i % 15 === 0) {
      masterArray.push("    ping-pong");
    } else if (i % 3 === 0)  {
      masterArray.push("    ping");
    } else if (i % 5 === 0) {
      masterArray.push("            pong");
    } else {
      masterArray.push(i);
    }
  };
  return masterArray;
};  // END masterFunk

// this function clears all <li> elements from DOM
var clearList = function() {
  $("#out-list li").remove();
};
// this fucntion takes an array and outputs each element as a <li> on the page
var updateArrayList = function(displayArray) {
  displayArray.forEach(function(arrElement) {
    $("#out-list").append( "<li>" + arrElement + "</li>" );
  });
};


// FRONT-END user interface logic
$(document).ready(function() {
  $("body").addClass("default-background");

  // simply reset the output area
  $("#reset-output").click(function(event) {
    clearList();
    $(".output-area").hide();
  });

  // output the list in regular order
  $("#ping-main").click(function(event) {
    var userInputNum = $("input#userInput").val();
    clearList();
    updateArrayList(masterFunk(userInputNum));
    $(".output-area").show();
  });

  // output the list in reverse order
  $("#ping-reverse").click(function(event) {
    var userInputNum = $("input#userInput").val();
    clearList();
    updateArrayList(masterFunk(userInputNum).reverse());
    $(".output-area").show();
  });

});
