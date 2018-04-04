// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const chars = {};

  for (let char of str){
    chars[char] = chars[char] + 1 || 1;
  }

  console.log(chars)
   let highestChar = Object.keys(chars).reduce((a, b) => { return chars[a] > chars[b] ? a : b} )
   return highestChar
   console.log(highestChar)
 }

module.exports = maxChar;
