// Initialize moment object
const now = moment();
var currentDaySchedule = {};

// Print the current date
var currentDate = moment().format("dddd, MMMM Do");
// print the current date to page
$("#currentDay").html(currentDate);

// Create elements
// time block container element
var timeBlockContainerEl = document.querySelector(".container");
console.log(timeBlockContainerEl);

// create div for individual time block ROW
var timeBlockRowEl = document.createElement("div");
timeBlockRowEl.classList.add("row");
timeBlockContainerEl.append(timeBlockRowEl);

// create div for hour
var hourDivEl = document.createElement("div");
hourDivEl.classList = "col-sm-2 hour time-block";
hourDivEl.textContent = "9AM";
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
