// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  //compute fib up to the nth element
  // let's say n = 5
  //we want to generate [0, 1, 1, 2, 3, 5]
  //return 5
  let sequence = [0, 1]
  let counter = n
  while(counter > 0){
    let nextNumber = sequence[sequence.length-1] + sequence[sequence.length-1 -1]
    sequence.push(nextNumber)
    counter = counter - 1
  }
  return sequence[n]
  //sequence[-1] + sequence[-1 - 1] = nextNumber
  //sequence.push(nextNumber)
  //in fib, go the the index n of fibonacci array and return it
}


module.exports = fib;
