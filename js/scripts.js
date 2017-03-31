// BACK-END business logic

// the masterFunk function takes a number and outputs a string containing all correct
//    numbers, pings, and pongs in the correct postions according to the specifications
var masterFunk = function(startNum) {
  let masterArray = [];
  let masterStr = "";

  // inform the user if their number is too high or low
  if ((startNum < 1) || (startNum > 200))  {
    masterStr = "Hey crafty devil... try again using a number between 1 and 200.";
    return masterStr;
  }

  for (i = 1 ; i <= startNum ; i++) {
    if (i % 15 === 0) {
      masterArray.push("ping-pong");
    } else if (i % 3 === 0)  {
      masterArray.push("ping");
    } else if (i % 5 === 0) {
      masterArray.push("pong");
    } else {
      masterArray.push(i);
    }
  };

  masterStr = masterArray.toString();
  return masterStr;
};  // END masterFunk

// var showArrayList = function(displayArray) {
//   displayArray.forEach(function(arrIndex) {
//
//     // $("#out-list li").last().append( "<li>test li</li>" );
//   });
// };

// FRONT-END user interface logic
$(document).ready(function() {
  $("#pongform").submit(function(event) {
  event.preventDefault();

  var userInputNum = $("input#userInput").val();
  $(".output-area").show();
  $(".output-area span#out1").text(userInputNum);
  $(".output-area #countOut").text(masterFunk(userInputNum));
  });
});
