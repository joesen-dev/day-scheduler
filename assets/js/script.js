// Initialize moment object
const now = moment();
var currentDaySchedule = {};

// Print the current date
var currentDate = moment().format("dddd, MMMM Do");
$("#currentDay").html(currentDate);

// Add businessHours to each time block element
var printTimeBlock = (hour) => {
  var businessHours = [9, 10, 11, 12, 1, 2, 3, 4, 5];

  hour = now.format("h");

  // time block container element
  var timeBlockContainerEl = document.querySelector(".container");
  console.log(timeBlockContainerEl);

  //   loop through businessHours array and printTimeBlock
  businessHours.forEach((element) => {
    // create div for individual time block ROW
    var timeBlockRowEl = document.createElement("div");
    timeBlockRowEl.classList.add("row");
    timeBlockContainerEl.append(timeBlockRowEl);

    // create div for hour
    var hourDivEl = document.createElement("div");
    hourDivEl.classList = "col-sm-2 hour time-block";
    hourDivEl.textContent = element;
    timeBlockRowEl.append(hourDivEl);

    // create div for task
    var textAreaEl = document.createElement("textarea");
    textAreaEl.classList = "col-sm-8 border-top description";
    timeBlockRowEl.append(textAreaEl);

    // Create button element
    var buttonEl = document.createElement("button");
    buttonEl.classList = "col-sm-2 saveBtn";
    buttonEl.textContent = "Icon";
    timeBlockRowEl.append(buttonEl);
  });
};
printTimeBlock();
