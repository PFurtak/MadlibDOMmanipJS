const htmlWords = document.querySelectorAll('span');
const userWords = document.querySelectorAll('input');
const myButton = document.querySelector('button');

function parseUserWords(list) {
  const arrayOfValues = [];
  list.forEach(function(input) {
    arrayOfValues.push(input.value);
  });
  return arrayOfValues;
}

myButton.addEventListener('click', function(e) {
  e.preventDefault();
  const userWordsArray = parseUserWords(userWords);

  htmlWords.forEach(function(htmlWord, index) {
    htmlWord.innerHTML = userWordsArray[index];
  });
});
