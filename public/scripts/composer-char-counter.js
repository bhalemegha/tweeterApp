$(document).ready(function() {

  //checks number of chars on key up events and update max char limit.
  const txtArea = document.querySelector('form textarea');
  const counterDiv = document.querySelector('div output');
  const maxCounterLen = $(counterDiv).val();//140 for now,
  $('textarea').keyup(function (event){
    const inputTextLength = Number($(this).val().length);
    if (inputTextLength > maxCounterLen) {
      $(counterDiv).css('color','red'); //max char turn in red color if text exceeds the limit 140(maxcounterLen)
    } 
    if (inputTextLength <= maxCounterLen) {
      $(counterDiv).css('color','black');
    }
    $(counterDiv).html( maxCounterLen - inputTextLength);//set new val for max length display once user starts typing on text box
  });
});