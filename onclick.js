const kahootButton = document.getElementById('initiate-kahoot-bots');
const gimkitButton = document.getElementById('initiate-gimkit-bots');


var retrievedKahootBotName;
var retrievedKahootGameCode;

var retrievedGimkitBotName;
var retrievedGimkitGameCode;

function collectKahootData(event) {
    event.preventDefault();

    let kahootGameCode = document.getElementById('kahoot-code-1').value;
    let kahootBotName = document.getElementById('kahoot-name-1').value;

    sessionStorage.setItem('keyKahootGameCode', kahootGameCode)
    sessionStorage.setItem('keyKahootBotName', kahootBotName)

    retrievedKahootGameCode = sessionStorage.getItem('keyKahootGameCode')
    retrievedKahootBotName = sessionStorage.getItem('keyKahootBotName')
}

function collectGimkitData(event) {
    event.preventDefault();

    let gimkitGameCode = document.getElementById('gimkit-code-2').value;
    let gimkitBotName = document.getElementById('gimkit-name-2').value;

    sessionStorage.setItem('keyGimkitGameCode', gimkitGameCode)
    sessionStorage.setItem('keyGimkitBotName', gimkitBotName)

    retrievedGimkitGameCode = sessionStorage.getItem('keyGimkitGameCode')
    retrievedGimkitBotName = sessionStorage.getItem('keyGimkitBotName')
}