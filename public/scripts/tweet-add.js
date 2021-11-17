$(document).ready(function () {
  const tweetContainer = document.querySelector('#tweet-container');
  const textVal = "We can consider a tweet to be an articleWe can consider a tweet to be an article, and there's an HTML5 tag for that! You shouldn't use IDs within this component. Why not?"
  const $container = $('<div>', {
    'class': 'tweet-txt',
    'style' : 'border-style: solid;'
  }).appendTo(tweetContainer);

  const $tweetHandle = $('<div>', {
    'class': 'usertweetDiv'
  }).appendTo($container);

  $('<div>', {
    'class': 'dateDiv',
    'html': "Megha"
  }).appendTo($tweetHandle);

  $('<div>', {
    'html': "Handle"
  }).appendTo($tweetHandle);


  $('<article>', {
    'html': textVal
  }).appendTo($container);

  $iconsDivMain = $('<div>', {
    'class': 'iconsDivMain'
  }).appendTo($container);

  $('<div>', {
    'class': 'dateDiv',
    'html': "10 days ago"
  }).appendTo($iconsDivMain);

  $('<div>', {
    'html': '<i class="fas fa-flag"></i><i class="fa fa-refresh" aria-hidden="true"></i><i class="fas fa-heart"></i>'
  }).appendTo($iconsDivMain);

  // const $usrDiv = $('<div>').text("Megha");;
  // const $newUsrTweetDiv = $(tweetContainer).append($usrDiv);
  // $($newUsrTweetDiv).css('display','flex');
  // $($newUsrTweetDiv).css('justify-content','space-around');

  // const $article = $("<article>").text(textVal);//It will create an HTML Article element.
  // const $newaddedElement = $(tweetContainer).append($article);//Appending newly created article element in article section
  // $newaddedElement.css("border-style","solid");
  // $newaddedElement.css("border-color","black");
  // $newaddedElement.css("display","flex");
  // $newaddedElement.css("justify-content","flex-start");

  // const $iconsDiv = $('<div>');
  // const $iconsDivMain = $(tweetContainer).append($iconsDiv);
  // $iconsDivMain.css('display','flex');
  // $iconsDivMain.css('flex-direction','row');
  // $iconsDivMain.css('justify-content','space-around');

  // const $divTime = $('<div>').text("timer");
  // const $dateDiv = $iconsDivMain.append($divTime);
  // $dateDiv.css("display","flex");
  // $dateDiv.css("width","80%");
  // $dateDiv.css("justify-content", "flex-start");

  // const $divIcons = $('<div>').text("icons");
  // $iconsDivMain.append($divIcons);

});

