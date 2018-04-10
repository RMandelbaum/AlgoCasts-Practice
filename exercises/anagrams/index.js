// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//   const hashOne = charMapStrings(stringA);
//   const hashTwo = charMapStrings(stringB);
//
//   if (Object.keys(hashOne).length !== Object.keys(hashTwo).length){
//     return false;
//     }
//
//   for (let char in hashOne){
//     if (hashOne[char] !== hashTwo[char]){
//       return false;
//     }
//   }
//
//   return true;
//
//   }
//
// function charMapStrings(str){
//   const hashString = {};
//
//   for(let char of str.replace(/[^\w]/g, "").toLowerCase()){
//     hashString[char] = hashString[char] + 1 || 1;
//   }
//   return hashString;
// }

function anagrams(stringA, stringB){
  return cleanString(stringA) === cleanString(stringB)
  }

  function cleanString(str){
    return str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('')
  }

module.exports = anagrams;
