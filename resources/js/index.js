/* eslint-env browser */

function loadWordlistFromJSON(callback) {
    fetch(Config.dataPath).then(response => response.json()).then(data => callback(data));
}

function onWordlistAvailable(wordlist) {
    words = wordlist;
}

loadWordlistFromJSON(onWordlistAvailable);