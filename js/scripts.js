// BACK-END business logic

var basicCount = function(startNum) {
  let masterArray = [];
  let masterStr = "";

  if ((startNum < 1) || (startNum > 200))  {
    masterStr = "Hey crafty devil... try again using a number between 1 and 200.";
    return masterStr;
  }

  for (i=1 ; i <= startNum ; i++) {
    masterArray.push(i)
  };
  
  masterStr = masterArray.toString();
  return masterStr;
};

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
  $(".output-area #countOut").text(basicCount(userInputNum));
  });
});
