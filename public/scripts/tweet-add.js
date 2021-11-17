$(document).ready(function() {
  const tweetContainer = document.querySelector('#tweet-container');
  const textVal = "We can consider a tweet to be an article, and there's an HTML5 tag for that! You shouldn't use IDs within this component. Why not?"
  
  const $usrDiv = $('<div>').text("Megha");;
  const $newUsrTweetDiv = $(tweetContainer).append($usrDiv);
  $newUsrTweetDiv.addClass("usertweetDiv");
  // $($newUsrTweetDiv).css('display','flex');
  // $($newUsrTweetDiv).css('justify-content','space-around');

  const $article = $("<article>").text(textVal);//It will create an HTML Article element.
  const $newaddedElement = $(tweetContainer).append($article);//Appending newly created article element in article section
  // $newaddedElement.css("border-style","solid");
  // $newaddedElement.css("border-color","black");
  // $newaddedElement.css("display","flex");
  // $newaddedElement.css("justify-content","flex-start");

  const $iconsDiv = $('<div>');
  const $iconsDivMain = $(tweetContainer).append($iconsDiv);
  $iconsDivMain.addClass("iconsDivMain");
  // $iconsDivMain.css('display','flex');
  // $iconsDivMain.css('flex-direction','row');
  // $iconsDivMain.css('justify-content','space-around');

  const $divTime = $('<div>').text("timer");
  const $dateDiv = $iconsDivMain.append($divTime);
  $dateDiv.addClass("dateDiv");
  // $dateDiv.css("display","flex");
  // $dateDiv.css("width","80%");
  // $dateDiv.css("justify-content", "flex-start");

  const $divIcons = $('<div>').text("icons");
  $iconsDivMain.append($divIcons);

});



// display: flex;
// flex-direction: row;
// justify-content: space-around;
