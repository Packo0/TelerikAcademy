// JavaScript source code
function isBrowserMozilla() {
    var currentWindow = window,
        browser = currentWindow.navigator.appCodeName,
        isBrowserMozilla = (browser === "Mozilla");

    if (isBrowserMozilla) {
        alert("Yes");
    } else {
        alert("No");
    }
}