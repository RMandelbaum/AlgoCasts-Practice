// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


//split string by spaces into an array of words
//iterate over each word and take the first index of each item and capitalize
//turn the sentence back into a string

function capitalize(str) {

  const sentenceArray = str.split(" ")
  let capSentence = []

  for(let word of sentenceArray){
    capSentence.push(word.replace(`${word[0]}`,`${word[0]}`.toUpperCase() ))
  }
  return capSentence.join(" ");
}

module.exports = capitalize;

// function capitalize(str){
//   let words = [];
//   for(let word of str.split(' ')){
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }
//
//   return words.join(' ');
// }

// function capitalize(str) {
//   let result = str[0].toUpperCase();
//
//   for (let i = 1; i < str.length; i++){
//     if (str[i - 1] === ' '){
//       result += str[i].toUpperCase();
//     }else{
//     result += str[i];
//   }
// }
// return result;
// }
