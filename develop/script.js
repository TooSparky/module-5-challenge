// Global Variables
var nineAm = $('#hour-9');
var tenAm = $('#hour-10');
var elevenAm = $('#hour-11');
var noon = $('#hour-12');
var onePm = $('#hour-1');
var twoPm = $('#hour-2');
var threePm = $('#hour-3');
var fourPm = $('#hour-4');
var fivePm = $('#hour-5');
var textEl = $('#text');
var saveButton = $('.saveBtn');
var currentDate = $('#currentDay');

// Dayjs variables
var now = dayjs();
var currentHour = now.hour();

// Wrap all code that interacts with the DOM in a call to jQuery
$(function () {
  // Event Listener for save button
  saveButton.on('click', function (event) {
    event.preventDefault();

    // Runs the saveText function that will set up local storage
    saveText();
  });

  // Sets the current date in the header
  $(currentDate).text(now.format('MMM DD YYYY'));

  // Loads the timeBlocks function on page load
  $(timeBlocks).ready();

  // Should set up all the colors based on time of day
  function timeBlocks() {
    
    // If Else statements from 9am - 5pm
    if (10 > currentHour) {
      //present
      nineAm.addClass('present');

      //future
      tenAm.addClass('future');
      elevenAm.addClass('future');
      noon.addClass('future');
      onePm.addClass('future');
      twoPm.addClass('future');
      threePm.addClass('future');
      fourPm.addClass('future');
      fivePm.addClass('future');
    }
    else if (11 > currentHour) {
      //present
      tenAm.addClass('present');

      //past
      nineAm.addClass('past');

      //future
      elevenAm.addClass('future');
      noon.addClass('future');
      onePm.addClass('future');
      twoPm.addClass('future');
      threePm.addClass('future');
      fourPm.addClass('future');
      fivePm.addClass('future');
    }
    else if (12 > currentHour) {
      //present
      elevenAm.addClass('present');

      //past
      nineAm.addClass('past');
      tenAm.addClass('past');

      //future
      noon.addClass('future');
      onePm.addClass('future');
      twoPm.addClass('future');
      threePm.addClass('future');
      fourPm.addClass('future');
      fivePm.addClass('future');
    }
    else if (13 > currentHour) {
      //present
      noon.addClass('present');

      //past
      nineAm.addClass('past');
      tenAm.addClass('past');
      elevenAm.addClass('past');

      //future
      onePm.addClass('future');
      twoPm.addClass('future');
      threePm.addClass('future');
      fourPm.addClass('future');
      fivePm.addClass('future');
    }
    else if (14 > currentHour) {
      //present
      onePm.addClass('present');

      //past
      nineAm.addClass('past');
      tenAm.addClass('past');
      elevenAm.addClass('past');
      noon.addClass('past');

      //future
      twoPm.addClass('future');
      threePm.addClass('future');
      fourPm.addClass('future');
      fivePm.addClass('future');
    }
    else if (15 > currentHour) {
      //present
      twoPm.addClass('present');

      //past
      nineAm.addClass('past');
      tenAm.addClass('past');
      elevenAm.addClass('past');
      noon.addClass('past');
      onePm.addClass('past');

      //future
      threePm.addClass('future');
      fourPm.addClass('future');
      fivePm.addClass('future');
    }
    else if (16 > currentHour) {
      //present
      threePm.addClass('present');

      //past
      nineAm.addClass('past');
      tenAm.addClass('past');
      elevenAm.addClass('past');
      noon.addClass('past');
      onePm.addClass('past');
      twoPm.addClass('past');

      //future
      fourPm.addClass('future');
      fivePm.addClass('future');
    }
    else if (17 > currentHour) {
      //present
      fourPm.addClass('present');

      //past
      nineAm.addClass('past');
      tenAm.addClass('past');
      elevenAm.addClass('past');
      noon.addClass('past');
      onePm.addClass('past');
      twoPm.addClass('past');
      threePm.addClass('past');

      //future
      fivePm.addClass('future');
    }
    else if (18 > currentHour) {
      //present
      fivePm.addClass('present');

      //past
      nineAm.addClass('past');
      tenAm.addClass('past');
      elevenAm.addClass('past');
      noon.addClass('past');
      onePm.addClass('past');
      twoPm.addClass('past');
      threePm.addClass('past');
      fourPm.addClass('past');
    }
  }

  // WANT TO RETURN STRING, NOT OBJECT, SO NO json STRINGIFY / PARSE

  // Saves the user text in local storage
  function saveText() {
    var timeBlock = $(this).parent().attr('id');
    localStorage.setItem(timeBlock, JSON.stringify(textEl));

    renderMessage();
  }

  // Renders the message saved from local storage
  function renderMessage() {
    var savedMessage = localStorage.getItem(timeBlock, textEl);
    console.log(savedMessage);
    if (savedMessage !== null) {
      textEl.text(savedMessage);
    }
  }
});

  // This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist