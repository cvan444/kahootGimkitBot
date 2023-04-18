const gimkitForm = document.getElementById('gimkit-form');
const gimkitButton = document.getElementById('initiate-gimkit-bots');

// Listen for the button click event
kahootButton.addEventListener('click', function(event) {
  // Prevent the default button click behavior
  event.preventDefault();

  // Get the values of the input fields
  const gimkitGameCode = document.getElementById('gimkit-code-1').value;
  const gimkitBotName = document.getElementById('gimkit-name-1').value;

  // Store the values in session storage
  sessionStorage.setItem('gimkitGameCode', gimkitGameCode);
  sessionStorage.setItem('gimkitBotName', gimkitBotName);

  const gimkitTempGameCode = sessionStorage.getItem('gimkitGameCode');
  const gimkitTempBotName = sessionStorage.getItem('gimkitBotName');

});










export { gimkitTempBotName, gimkitTempGameCode };