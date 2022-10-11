// Initialize moment object
const now = moment();

// Print the current date
var currentDate = moment().format("dddd, MMMM Do");
$("#currentDay").html(currentDate);

$(document).ready(function () {
  //saveBtn click listener for
  $(".saveBtn").on("click", function (event) {
    //define time and description variables
    var text = $(this).siblings("textarea.description").val();
    console.log(text);
    var time = $(this).parent().attr("id");
    console.log(time);

    //save to local storage
    localStorage.setItem(text, time);
  });

  function timeTracker() {
    var hour = moment().hours();
    console.log("hour");
    console.log(hour);

    $(".time-block").each(function () {
      var blockTime = parseInt($(this).attr("id").split("hour")[1]);
      console.log("blockTime");
      console.log(blockTime);

      if (blockTime < hour) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (blockTime === hour) {
        $(this).removeClass("future");
        $(this).addClass("present");
        $(this).removeClass("past");
      } else {
        $(this).addClass("future");
        $(this).removeClass("past");
        $(this).removeClass("present");
      }
    });
  }
  timeTracker();
});
