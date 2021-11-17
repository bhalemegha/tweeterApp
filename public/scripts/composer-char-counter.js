$(document).ready(function() {
  const txtArea = document.querySelector('form textarea');
  const counterDiv = document.querySelector('div output');
  const maxCounterLen = $(counterDiv).val();
  $('textarea').keyup(function (event){
    const inputTextLength = Number($(this).val().length);
    if (inputTextLength > maxCounterLen) {
      $(counterDiv).css('color','red');
    } 
    if (inputTextLength <= maxCounterLen) {
      $(counterDiv).css('color','black');
    }
    $(counterDiv).html( maxCounterLen - inputTextLength);
  });
});