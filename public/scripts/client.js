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
    const createdAt = timeago.format(tweetData["created_at"]);

    //tweet container per tweet
    const $container = $('<div class= "tweet-txt" style="border-style: solid;"></div>');
    const $tweetHandle = $('<div>', {
      'class': 'usertweetDiv'
    }).appendTo($container);
    //it will show user name
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
    if (!tweetData) {//if no text
      // $('#errorDiv').addClass('.c-error .c-validation');
      // $('#errorDiv').text("Tweet Message should not be blank");
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