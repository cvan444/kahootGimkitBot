const kahootButton = getElementById('initiate-kahoot-bots');
const gimkitButton = getElementById('initiate-gimkit-bots');


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

    var retrievedKahootGameCode = sessionStorage.getItem('keyKahootGameCode')
    var retrievedKahootBotName = sessionStorage.getItem('keyKahootBotName')
}

function collectGimkitData(event) {
    event.preventDefault();

    let gimkitGameCode = document.getElementById('gimkit-code-2').value;
    let gimkitBotName = document.getElementById('gimkit-name-2').value;

    sessionStorage.setItem('keyGimkitGameCode', gimkitGameCode)
    sessionStorage.setItem('keyGimkitBotName', gimkitBotName)

    var retrievedGimkitGameCode = sessionStorage.getItem('keyGimkitGameCode')
    var retrievedGimkitBotName = sessionStorage.getItem('keyGimkitBotName')
}