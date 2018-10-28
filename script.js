var tweetButton = document.getElementsByClassName("tweet-button")[0];
var tweetInput = document.getElementsByClassName("tweet-input")[0];
var tweetForm = document.getElementsByClassName("tweet-form")[0];

// Publicar tweet no feed
tweetButton.addEventListener("click", submitTweet);

function submitTweet(event) {
  var tweetBox = document.createElement("div");
  var tweetMiniPicture = document.createElement("img");
  var displayName = document.createElement("span");
  var publishedTweet = document.createElement("p");
  var insertFeed = document.getElementsByClassName("feed")[0];
  displayName.textContent = "@denisecaze";
  publishedTweet.textContent = tweetInput.value;
  tweetBox.appendChild(tweetMiniPicture);
  tweetBox.appendChild(displayName);
  tweetBox.appendChild(publishedTweet);
  insertFeed.appendChild(tweetBox);
  event.preventDefault();
}
