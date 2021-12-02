import pluralize from 'pluralize'

const word = prompt("Enter an English word to pluralize", "cow");

const pluralized = pluralize(word);

alert(pluralized);