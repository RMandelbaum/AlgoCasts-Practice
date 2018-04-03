// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reduce( (reverse, character) => character + reverse, '')
}

module.exports = reverse;
//Option 1
//return str.split('').reverse('').join('')

//Option 2
// let reversed = '';
// for (let character of str){
//   reversed = character + reversed
// }
// return reversed;
