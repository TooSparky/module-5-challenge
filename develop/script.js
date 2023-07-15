// Global Variables
nineAm = $('#hour-9');
tenAm = $('#hour-10');
elevenAm = $('#hour-11');
noon = $('#hour-12');
onePm = $('#hour-1');
twoPm = $('#hour-2');
threePm = $('#hour-3');
fourPm = $('#hour-4');
fivePm = $('#hour-5');
textEl = $('#text');
saveButton = $('.saveBtn');
currentDate = $('#currentDay');

// Set up later with dayjs
currentHour = dayjs();

// Wrap all code that interacts with the DOM in a call to jQuery
$(function () {
  // Event Listener for save button
  saveButton.on('click', function (event) {
    event.preventDefault();

    // Runs the saveText function that will set up local storage
    saveText();
  });

  // Sets the current date in the header
  $(currentDate).text(currentHour.format('MMM DD YYYY HH:MM:s a'));

  // Loads the timeBlocks function on page load
  $(timeBlocks).ready();

  // Should set up all the colors based on time of day
  function timeBlocks() {
    // If Else statements from 9am - 5pm
    console.log('in timeblocks test');
    if (nineAm > currentHour) {
      //future
      nineAm.addClass('future');
      if (nineAm === currentHour) {
        //present
        nineAm.addClass('present');
      }
      else {
        //past
        nineAm.addClass('past');
      }
    }
    else if (tenAm > currentHour) {
      //future
      tenAm.addClass('future');
      if (tenAm === currentHour) {
        //present
        tenAm.addClass('present');
      }
      else {
        //past
        tenAm.addClass('past');
      }
    }
    else if (elevenAm > currentHour) {
      //future
      elevenAm.addClass('future');
      if (elevenAm === currentHour) {
        //present
        elevenAm.addClass('present');
      }
      else {
        //past
        elevenAm.addClass('past');
      }
    }
    else if (noon > currentHour) {
      //future
      noon.addClass('future');
      if (elevenAm === currentHour) {
        //present
        noon.addClass('present');
      }
      else {
        //past
        noon.addClass('past');
      }
    }
    else if (onePm > currentHour) {
      //future
      onePm.addClass('future');
      if (elevenAm === currentHour) {
        //present
        onePm.addClass('present');
      }
      else {
        //past
        onePm.addClass('past');
      }
    }
    else if (twoPm > currentHour) {
      //future
      twoPm.addClass('future');
      if (elevenAm === currentHour) {
        //present
        twoPm.addClass('present');
      }
      else {
        //past
        twoPm.addClass('past');
      }
    }
    else if (threePm > currentHour) {
      //future
      threePm.addClass('future');
      if (elevenAm === currentHour) {
        //present
        threePm.addClass('present');
      }
      else {
        //past
        threePm.addClass('past');
      }
    }
    else if (fourPm > currentHour) {
      //future
      fourPm.addClass('future');
      if (elevenAm === currentHour) {
        //present
        fourPm.addClass('present');
      }
      else {
        //past
        fourPm.addClass('past');
      }
    }
    else if (fivePm > currentHour) {
      //future
      fivePm.addClass('future');
      if (elevenAm === currentHour) {
        //present
        fivePm.addClass('present');
      }
      else {
        //past
        fivePm.addClass('past');
      }
    }
  }

  // Saves the user text in local storage
  function saveText() {
    localStorage.setItem("textEl", JSON.stringify(textEl));
    renderMessage();
  }

  // Renders the saved messages
  function renderMessage() {
    var nineAmSavedMessage = JSON.parse(localStorage.getItem('textEl'));
    if (nineAmSavedMessage !== null) {
      textEl.text(nineAmSavedMessage);
    }
  }

  // HINT: How can the id attribute of each time-block be used to do this?

});

  // This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.\


// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours of 9am&ndash;5pm
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist