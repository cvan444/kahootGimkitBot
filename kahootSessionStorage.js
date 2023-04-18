const kahootForm = document.getElementById('kahoot-form');
const kahootButton = document.getElementById('initiate-kahoot-bots');

// Listen for the button click event
kahootButton.addEventListener('click', function(event) {
  // Prevent the default button click behavior
  event.preventDefault();

  // Get the values of the input fields
  let kahootGameCode = document.getElementById('game-code-1').value;
  let kahootBotName = document.getElementById('kahoot-name-1').value;

  // Store the values in session storage
  sessionStorage.setItem('kahootGameCode', kahootGameCode);
  sessionStorage.setItem('kahootBotName', kahootBotName);

  let kahootTempGameCode = sessionStorage.getItem('kahootGameCode');
  let kahootTempBotName = sessionStorage.getItem('kahootBotName');
  
});










export { kahootTempGameCode, kahootTempBotName,  };