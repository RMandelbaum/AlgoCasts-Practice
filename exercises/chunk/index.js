// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  //[1,2,3,4,5,6,7,8,9,10] divide it into chunks of 2
  //[[1,2],[3,4],[5,6],[7,8],[9,10]]
  const chunkArray = []
  let index = 0;
    while (array.length > index){
      chunkArray.push(array.slice(index, index + size))
      index += size
}
  return chunkArray

}

module.exports = chunk;
