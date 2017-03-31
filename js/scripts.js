// BACK-END business logic





// FRONT-END user interface logic
$(document).ready(function() {
  $("#pongform").submit(function(event) {
  event.preventDefault();
  var userInputNum = $("input#userInput").val();
  $(".output-area span#out1").text(userInputNum);
  $(".output-area span#out2").text("-")
  });
});
