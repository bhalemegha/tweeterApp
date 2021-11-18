$(document).ready(function() {

  //checks number of chars on key up events and update max char limit.
  // const txtArea = document.querySelector('form textarea');
  const counterDiv = document.querySelector('div output');
  const maxCounterLen = $(counterDiv).val();//140 for now,
  $('textarea').keyup(function() {
    $('#errorDiv').hide();
    const inputTextLength = $(this).val().length;
    if (inputTextLength > maxCounterLen) {
      //max char turn in red color if text exceeds the limit 140(maxcounterLen)
      $(counterDiv).css('color','red');
    }
    if (inputTextLength <= maxCounterLen) {
      $(counterDiv).css('color','black');
    }
    //set new val for max length display once user starts typing on text box
    $(counterDiv).html(maxCounterLen - inputTextLength);
  });
});