// Initialize moment object
const now = moment();

// Print the current date
var currentDate = moment().format('dddd, MMMM Do');
$('#currentDay').html(currentDate);

$(document).ready(function () {
  const savedTasks = localStorage.getItem('task')
    ? JSON.parse(localStorage.getItem('task'))
    : [];

  $('.saveBtn').on('click', function (event) {
    //define time and description variables
    var text = $(this).siblings('textarea.description').val();
    var time = $(this).parent().attr('id');

    // create a tasks object with the time and text
    const task = {
      time: time,
      text: text,
    };

    savedTasks.push(task);

    //save to local storage
    localStorage.setItem('task', JSON.stringify(savedTasks));
  });

  // Track the time (past, present, future)
  function timeTracker() {
    var hour = moment().hours();

    $('.time-block').each(function () {
      var blockTime = parseInt($(this).attr('id').split('hour')[1]);
      var time = $(this).attr('id');

      // get the time key from local storage
      var timeFromLocalStorage = savedTasks.map(task => {
        // set the text description to it's corresponding time block
        if (time === task.time) {
          $(this).find('textarea.description').val(task.text);
        }
      });

      // set the text to description

      if (blockTime < hour) {
        $(this).removeClass('future');
        $(this).removeClass('present');
        $(this).addClass('past');
      } else if (blockTime === hour) {
        $(this).removeClass('future');
        $(this).addClass('present');
        $(this).removeClass('past');
      } else {
        $(this).addClass('future');
        $(this).removeClass('past');
        $(this).removeClass('present');
      }
    });
  }
  timeTracker();
});
