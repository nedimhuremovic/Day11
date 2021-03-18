// Only change code below this line
function largestNumFromArr(arr) {
  var maxNumArray = [];
  var temp;
  for (var i = 0; i < arr.length; i++) {
    temp = arr[i][0];
    for (var j = 0; j < arr.length; j++) {
      if (temp <= arr[i][j]) temp = arr[i][j];
    }
    maxNumArray.push(temp);
  }

  return maxNumArray;
}
// Only change code above this line

console.log(
  largestNumFromArr([
    [4, 9, 1, 3],
    [13, 35, 18, 26],
    [32, 35, 97, 39],
    [10000, 1001, 857, 1],
  ])
);
module.exports = largestNumFromArr;
