var tweetButton = document.getElementsByClassName("tweet-button")[0];
var tweetInput = document.getElementsByClassName("tweet-input")[0];
var tweetForm = document.getElementsByClassName("tweet-form")[0];
var charCounter = document.getElementsByClassName("character-counter")[0];

// Habilitar botão
tweetInput.addEventListener("keydown", enableButton);
tweetInput.addEventListener("keyup", enableButton);

function enableButton() {
  tweetButton.disabled = false;
  tweetButton.style.cursor = "pointer";
  tweetButton.style.opacity = "1";
  tweetInput.addEventListener("keydown", startCounting);
  tweetInput.addEventListener("keyup", startCounting);
}

function disableButton () {
  tweetButton.style.opacity = "0.3";
  tweetButton.style.cursor = "not-allowed";
  tweetButton.disabled = true;  
}

// Contar caracteres
function startCounting() {
  var charAllowed = 140;
  var typedChar = tweetInput.value.length;
  var remainingChar = charAllowed - typedChar;
  charCounter.textContent = remainingChar;
  if (typedChar === 0 || !tweetInput.value.trim()) { 
    disableButton();
  }
}

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
  tweetBox.classList.add("tweet-box");
  tweetMiniPicture.classList.add("mini-picture");
  displayName.classList.add("display-time-name");
  publishedTweet.classList.add("published-tweet");
  tweetBox.appendChild(tweetMiniPicture);
  tweetBox.appendChild(displayName);
  tweetBox.appendChild(publishedTweet);
  insertFeed.appendChild(tweetBox);
  charCounter.textContent = 140;
  tweetForm.reset();
  event.preventDefault();
  disableButton();
}