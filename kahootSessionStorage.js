const kahootForm = document.getElementById('kahoot-form');
const kahootButton = document.getElementById('initiate-kahoot-bots');

// Listen for the button click event
kahootButton.addEventListener('click', function(event) {
  // Prevent the default button click behavior
  event.preventDefault();

  // Get the values of the input fields
  const gameCode = document.getElementById('game-code-1').value;
  const botName = document.getElementById('kahoot-name-1').value;

  // Store the values in session storage
  sessionStorage.setItem('gameCode', gameCode);
  sessionStorage.setItem('botName', botName);

  const kahootTempGameCode = sessionStorage.getItem('gameCode');
  const kahootTempBotName = sessionStorage.getItem('botName');
  
});










export { kahootTempBotName, kahootTempGameCode };