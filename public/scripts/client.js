/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {

  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const createTweetElement = function(tweetData) {
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

    //To add Avataar
    const $img = $('<img>', {
      'src': escape(avataar)
    }).appendTo($tweetHandle);

    //To show user name
    $('<div>', {
      'class': 'dateDiv',
      'html': escape(usrName)
    }).appendTo($tweetHandle);

    //for handle
    $('<div>', {
      'html': escape(handle)
    }).appendTo($tweetHandle);

    //tweet content
    $('<article>', {
      'html': escape(content)
    }).appendTo($container);

    //container to hold time ago and various icon like flag, heart and sync
    const $iconsDivMain = $('<div>', {
      'class': 'iconsDivMain'
    }).appendTo($container);

    //time ago div
    $('<div>', {
      'class': 'dateDiv',
      'html': escape(createdAt)
    }).appendTo($iconsDivMain);

    //flag, heart and sync icons container
    $('<div>', {
      'html': '<i class="fas fa-flag"></i><i class="fa fa-retweet" aria-hidden="true"></i><i class="fas fa-heart"></i>'
    }).appendTo($iconsDivMain);
    return $container;
  };

  //clears text area and reset counter once tweet has been posted
  const clearTextArea = function() {
    $('textarea').val("");
    $('#errorDiv').html("");
    $('div output').text(140);
  };

  //To render tweets data, iterating through all tweets, creating element for it and append it section
  const renderTweets = function(tweets) {
    $('#tweet-container').html("");
    const revData = tweets.reverse();
    for (let tweet of revData) {
      const $tweetEle = createTweetElement(tweet);
      $('#tweet-container').append($tweetEle);
    }
    clearTextArea();
  };

  //renderTweets(data);

  $("form").on("submit", function(event) {
    //To prevent default behaviour of browser once form has been submitted.
    event.preventDefault();
    
    //checks for empty string
    let tweetData = $('textarea').first().val();
    if (!tweetData) {
      $('#errorDiv').text("Tweet text should not be blank!");
      $('#errorDiv').show();
      return;
    }
    //check it it's longer than limit(140 for now)
    if (tweetData.length > 140) {
      $('#errorDiv').text("Tweet text is too long!!");
      $('#errorDiv').show();
      return;
    }
    //getting form action
    let tweetUrl = $(this).attr('action');
    //adding form data to query string
    tweetData = $(this).serialize();
    //sending post request
    $.ajax({
      type: "POST",
      url: tweetUrl,
      data: tweetData,
      //renders tweets on success
      success:loadTweets()
    });
  });

  //fetching tweets
  const loadTweets = function() {
    const url = "/tweets/";
    $.ajax({
      url: url,
      method: "GET"
    })
      .then((data) => {
        renderTweets(data);
      });
  };
});