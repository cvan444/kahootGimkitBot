const gimkitForm = document.getElementById('gimkit-form');
const gimkitButton = document.getElementById('initiate-gimkit-bots');

var gimkitTempGameCode;
var gimkitTempBotName;

// Listen for the button click event
gimkitButton.addEventListener('click', function(event) {
  // Prevent the default button click behavior
  event.preventDefault();
  gimkitButton.textContent = "Process started";

  // Get the values of the input fields
  let gimkitGameCode = document.getElementById('gimkit-code-2').value;
  let gimkitBotName = document.getElementById('gimkit-name-2').value;

  // Store the values in session storage
  sessionStorage.setItem('gimkitGameCode', gimkitGameCode);
  sessionStorage.setItem('gimkitBotName', gimkitBotName);

  let gimkitTempGameCode = sessionStorage.getItem('gimkitGameCode');
  let gimkitTempBotName = sessionStorage.getItem('gimkitBotName');

});







export default './gimkitSessionStorage.js';


export { gimkitTempGameCode, gimkitTempBotName };