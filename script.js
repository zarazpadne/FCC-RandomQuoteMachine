function getRandomQuote() {
  $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?", function(json) {
    var quoteText = JSON.stringify(json.quoteText);
    quoteText = quoteText.replace(/"/g,"");
    var quoteAuthor = "- " + JSON.stringify(json.quoteAuthor);
    quoteAuthor = quoteAuthor.replace(/"/g,"");
    var html = "<div id=\"quote-text\">" + quoteText + "</div>";
    html += "<div id=\"quote-author\">" + quoteAuthor + "</div>";
    var str = json.quoteText + " " + json.quoteAuthor;
    //str = str.replace(/ /g, '%20');
    var tweetLink = "<a class=\"twitter-share-button\" href=\"https://twitter.com/intent/tweet?text=" + str + " \" target=\"_blank\"><button type=\"button\" class=\"ghost-button\"><img id=\"tweet-icon\" src=\"http://i1341.photobucket.com/albums/o759/terramassu/twitter_zpssf0yet3q.png\">Tweet</button></a>"
    $('#quote-box').html(html);
    $('.twitter-share-button').html(tweetLink);
  });
}

$(document).ready(function() {
    $("#getQuoteButton").on("click", function(){
      getRandomQuote();
    });
});

