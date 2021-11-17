/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function () {
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]
  const createTweetElement = function (tweetData) {
    const usrName = tweetData["user"]["name"];
    const handle = tweetData["user"]["handle"];
    const content = tweetData["content"]["text"];
    const createdAt = timeago.format(tweetData["created_at"]);
    const tweetContainer = document.querySelector('#tweet-container');
    const textVal = "We can consider a tweet to be an articleWe can consider a tweet to be an article, and there's an HTML5 tag for that! You shouldn't use IDs within this component. Why not?"
    const $container = $('<div class= "tweet-txt" style="border-style: solid;"></div>');
    //$('tweet-container').append($container);
    const $tweetHandle = $('<div>', {
      'class': 'usertweetDiv'
    }).appendTo($container);
    console.log("in function");
    $('<div>', {
      'class': 'dateDiv',
      'html': usrName
    }).appendTo($tweetHandle);

    $('<div>', {
      'html': handle
    }).appendTo($tweetHandle);


    $('<article>', {
      'html': content
    }).appendTo($container);

    $iconsDivMain = $('<div>', {
      'class': 'iconsDivMain'
    }).appendTo($container);

    $('<div>', {
      'class': 'dateDiv',
      'html': createdAt
    }).appendTo($iconsDivMain);

    $('<div>', {
      'html': '<i class="fas fa-flag"></i><i class="fa fa-refresh" aria-hidden="true"></i><i class="fas fa-heart"></i>'
    }).appendTo($iconsDivMain);
    return $container;
  }

  const renderTweets = function (tweets) {
    for (let tweet in tweets) {
      const $tweetEle = createTweetElement(tweets[tweet])
      $('#tweet-container').append($tweetEle);
    }
  }

  renderTweets(data);
});