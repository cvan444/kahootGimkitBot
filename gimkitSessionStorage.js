const gimkitForm = document.getElementById('gimkit-form');
const gimkitButton = document.getElementById('initiate-gimkit-bots');

// Listen for the button click event
kahootButton.addEventListener('click', function(event) {
  // Prevent the default button click behavior
  event.preventDefault();

  // Get the values of the input fields
  let gimkitGameCode = document.getElementById('gimkit-code-1').value;
  let gimkitBotName = document.getElementById('gimkit-name-1').value;

  // Store the values in session storage
  sessionStorage.setItem('gimkitGameCode', gimkitGameCode);
  sessionStorage.setItem('gimkitBotName', gimkitBotName);

  let gimkitTempGameCode = sessionStorage.getItem('gimkitGameCode');
  let gimkitTempBotName = sessionStorage.getItem('gimkitBotName');

});










export { gimkitTempGameCode, gimkitTempBotName };