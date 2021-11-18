/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function () {
  // const data = [
  //   {
  //     "user": {
  //       "name": "Newton",
  //       "avatars": "https://i.imgur.com/73hZDYK.png"
  //       ,
  //       "handle": "@SirIsaac"
  //     },
  //     "content": {
  //       "text": "If I have seen further it is by standing on the shoulders of giants"
  //     },
  //     "created_at": 1461116232227
  //   },
  //   {
  //     "user": {
  //       "name": "Descartes",
  //       "avatars": "https://i.imgur.com/nlhLi3I.png",
  //       "handle": "@rd"
  //     },
  //     "content": {
  //       "text": "Je pense , donc je suis"
  //     },
  //     "created_at": 1461113959088
  //   }
  // ]
  const createTweetElement = function (tweetData) {
    const usrName = tweetData["user"]["name"];
    const handle = tweetData["user"]["handle"];
    const content = tweetData["content"]["text"];
    const createdAt = timeago.format(tweetData["created_at"]);

    //tweet container per tweet
    const $container = $('<div class= "tweet-txt" style="border-style: solid;"></div>');
    const $tweetHandle = $('<div>', {
      'class': 'usertweetDiv'
    }).appendTo($container);
    //it will show user name
    $('<div>', {
      'class': 'dateDiv',
      'html': usrName
    }).appendTo($tweetHandle);

    //for handle
    $('<div>', {
      'html': handle
    }).appendTo($tweetHandle);

    //tweet content
    $('<article>', {
      'html': content
    }).appendTo($container);

    //container to hold time ago and various icon like flag, heart and sync
    $iconsDivMain = $('<div>', {
      'class': 'iconsDivMain'
    }).appendTo($container);

    //time ago div
    $('<div>', {
      'class': 'dateDiv',
      'html': createdAt
    }).appendTo($iconsDivMain);

    //icons container
    $('<div>', {
      'html': '<i class="fas fa-flag"></i><i class="fa fa-refresh" aria-hidden="true"></i><i class="fas fa-heart"></i>'
    }).appendTo($iconsDivMain);
    return $container;
  }

  //To render tweets data, iterating through all tweets, creating element for it and append it section
  const renderTweets = function (tweets) {
    for (let tweet of tweets) {
      const $tweetEle = createTweetElement(tweet)
      $('#tweet-container').append($tweetEle);
    }
  }

  //renderTweets(data);

  $( "form" ).on( "submit", function( event ) {
    event.preventDefault();
    let tweetData = $('textarea').first().val();
    alert(tweetData.length);
    if (!tweetData) {//if no text
      alert("Tweet Message should not be blank");
      return;
    }
    if (tweetData.length >= 140) {//check it it's too
      alert("tweet content is too long!!");
      return;
    }
    let tweetUrl = $( this ).attr('action');//getting form action
    tweetData = $(this).serialize();//adding form data to query string

    $.ajax({//sending post request
      type: "POST",
      url: tweetUrl,
      data: tweetData
    });
  });

  const loadTweets = function() {
    const url = "/tweets/";
    $.ajax({
      url: url,
      method: "GET"
    })
    .then((data) => {
      renderTweets(data);
    }) 
  }
});