$(function () {
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
  var saveButton = $('.saveBtn');
  var currentDate = $('#currentDay');

  // Dayjs variables
  var now = dayjs();
  var currentHour = now.hour();

  saveButton.on('click', function (event) {
    event.preventDefault();

    // Saves into local storage
    var savedMessage = $(this).siblings('textarea').val();
    var timeBlock = $(this).parent().attr('id');

    localStorage.setItem(timeBlock, savedMessage);
  });

  // Sets the current date in the header
  $(currentDate).text(now.format('MMM DD YYYY'));

  // Loads the functions on page load
  $(colorChanger).ready();

  function colorChanger() {
    
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
    };

    // Renders the message saved from local storage
    var textInput = $('<textarea>').addClass('time-block');
    var timeBlock = $(this).parent().attr('id');
    var savedMessage = localStorage.getItem(timeBlock) || '';
    if (savedMessage !== null) {
      textInput.val(savedMessage);
    }
  }
});
