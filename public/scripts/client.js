/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function () {

  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const createTweetElement = function (tweetData) {
    const usrName = tweetData["user"]["name"];
    const handle = tweetData["user"]["handle"];
    const content = tweetData["content"]["text"];
    const avataar = tweetData["user"]["avatars"];
    const createdAt = timeago.format(tweetData["created_at"]);

    //tweet container per tweet
    const $container = $('<div class= "tweet-txt" style="border-style: solid;"></div>');
    const $tweetHandle = $('<div>', {
      'class': 'usertweetDiv'
    }).appendTo($container);
    //it will show user name
    const $img = $('<img>', {
      'src': escape(avataar)
    }).appendTo($tweetHandle);

    $('<div>', {
      'class': 'dateDiv',
      'html': escape(usrName)
    }).appendTo($img);

    //for handle
    $('<div>', {
      'html': escape(handle)
    }).appendTo($tweetHandle);

    //tweet content
    $('<article>', {
      'html': escape(content)
    }).appendTo($container);

    //container to hold time ago and various icon like flag, heart and sync
    $iconsDivMain = $('<div>', {
      'class': 'iconsDivMain'
    }).appendTo($container);

    //time ago div
    $('<div>', {
      'class': 'dateDiv',
      'html': escape(createdAt)
    }).appendTo($iconsDivMain);

    //icons container
    $('<div>', {
      'html': '<i class="fas fa-flag"></i><i class="fa fa-refresh" aria-hidden="true"></i><i class="fas fa-heart"></i>'
    }).appendTo($iconsDivMain);
    return $container;
  }

  const clearTextArea = function() {
    $('textarea').val("");
    $('div output').text(140);
  }

  //To render tweets data, iterating through all tweets, creating element for it and append it section
  const renderTweets = function (tweets) {
    for (let tweet of tweets) {
      const $tweetEle = createTweetElement(tweet)
      $('#tweet-container').append($tweetEle);
    }
    clearTextArea();
  }

  //renderTweets(data);

  $( "form" ).on( "submit", function( event ) {
    event.preventDefault();
    let tweetData = $('textarea').first().val();
    if (!tweetData) {//if no text
      $('#errorDiv').text("Tweet text should not be blank!");
      $('#errorDiv').show();
      return;
    }
    if (tweetData.length >= 140) {//check it it's too
      $('#errorDiv').text("Tweet text is too long!!");
      $('#errorDiv').show();
      return;
    }

    let tweetUrl = $( this ).attr('action');//getting form action
    tweetData = $(this).serialize();//adding form data to query string
    $.ajax({//sending post request
      type: "POST",
      url: tweetUrl,
      data: tweetData,
      success:loadTweets()
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