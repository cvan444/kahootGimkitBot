var kahootForm = document.getElementById('kahoot-form');
var kahootButton = document.getElementById('initiate-kahoot-bots');

// Listen for the button click event
kahootButton.addEventListener('click', function(event) {
  // Prevent the default button click behavior
  event.preventDefault();

  // Get the values of the input fields
  var gameCode = document.getElementById('game-code-1').value;
  var botName = document.getElementById('kahoot-name-1').value;

  // Store the values in session storage
  sessionStorage.setItem('gameCode', gameCode);
  sessionStorage.setItem('botName', botName);

  var kahootTempGameCode = sessionStorage.getItem('gameCode');
  var kahootTempBotName = sessionStorage.getItem('botName');
});

// Export the values
export { kahootTempBotName, kahootTempGameCode };