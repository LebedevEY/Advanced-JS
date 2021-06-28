

// Четвёртое домашнее задание

var text = (document.getElementById('first-text'));
var newText = text.outerHTML.replace(/\B'/g, '\"');
var text2 = document.getElementById('second-text');
text2.insertAdjacentHTML("beforeend", newText);
