// Main JavaScript File

// String variable
var str = "this is a sentence";

// Use the length property to see how many characters are in your `str` variable
console.log("string.length = " + str.length);
// Use the `toUpperCase` method to create a new variable `STR` that has the `str` value, but all UPPPERCASE.
var STR = str.toUpperCase();
// Use the "split" method create a new variable `words` that is an array of the component words of `str`
var words = str.split(' ');
// Use the length property to see how many words are in your `words` array
console.log("words.length = " + words.length);
// Write a function that returns the number of words in a string
var wordsInString = function(word) {
  var words = word.split(" ");
  return words.length;
}
// Pass a string to your function to determine that it works
console.log("wordsInString(\"hello how are you\") = " + wordsInString("hello how are you"));
// Write a function to test if a string contains a word, and returns a boolean value.
var stringContainsWord = function(str, word) {
  return (str.indexOf(word) != -1);
}
// Pass a phrase and a string to your function to determine that it works
console.log("stringContainsWord('this is a test', 'test') = " + stringContainsWord("this is a test", "test"));
