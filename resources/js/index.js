/* eslint-env browser */

const DATA_PATH = "data/romeo-and-juliet-word-list.json";

function loadWordlistFromJSON(callback) {
    fetch(DATA_PATH).then(response => response.json()).then(data => callback(data));
}

function init() {
    loadWordlistFromJSON(onWordlistAvailable);
}

function onWordlistAvailable(wordlist) {
    console.log("### WordList received ###");
    // Prints the first 10 entries from the received word list
    console.log(wordlist.slice(0, 10));
    // Start your own implementation here
}

init();