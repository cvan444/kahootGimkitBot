const kahootForm = document.getElementById('kahoot-form');
const kahootButton = document.getElementById('initiate-kahoot-bots');

var kahootTempGameCode;
var kahootTempBotName;



// Listen for the button click event
kahootButton.addEventListener('click', function(event) {
  // Prevent the default button click behavior
  event.preventDefault();
  kahootButton.textContent = "Process started";


  // Get the values of the input fields
  let kahootGameCode = document.getElementById('kahoot-code-1').value;
  let kahootBotName = document.getElementById('kahoot-name-1').value;

  // Store the values in session storage
  sessionStorage.setItem('kahootGameCode', kahootGameCode);
  sessionStorage.setItem('kahootBotName', kahootBotName);

  let kahootTempGameCode = sessionStorage.kahootGameCode;
  let kahootTempBotName = sessionStorage.kahootBotName;
  
});







export default './kahootSessionStorage';


export { kahootTempGameCode, kahootTempBotName };