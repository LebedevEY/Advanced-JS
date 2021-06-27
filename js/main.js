

// Четвёртое домашнее задание

var text = (document.getElementById('first-text'));
var newText = text.outerHTML.replace(/'/g, '\"');
var finalText = newText.replace(/\b"/g, '\'');
var text2 = document.getElementById('second-text');
text2.insertAdjacentHTML("beforeend", finalText);
