// Initialize moment object
const now = moment();
var currentDaySchedule = {};

// Print the current date
var currentDate = moment().format("dddd, MMMM Do");
// print the current date to page
$("#currentDay").html(currentDate);
