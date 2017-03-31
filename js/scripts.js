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


// FRONT-END user interface logic
$(document).ready(function() {
  $("#pongform").submit(function(event) {
  event.preventDefault();
  // get starting number from user field
  var userInputNum = $("input#userInput").val();

  // function to clear all old list items
  var clearList = function() {
    $("#out-list li").remove();
  };

  // this fucntion takes an array and outputs each element as a <li> on the page
  var showArrayList = function(displayArray) {
    clearList();
    displayArray.forEach(function(arrElement) {
      $("#out-list").append( "<li>" + arrElement + "</li>" );
    });
  };

  showArrayList(masterFunk(userInputNum));

  $(".output-area").show();
  });
});
