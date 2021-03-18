// Create an array here
var myArr = [2, 4, 0, 8, 10];
// End of creating an array

function myArrayFunction(arr) {
  var myItems = [...arr];
  // Only change code below this line
  for (var i = 0; i < 5; i++) {
    if (i !== 2) myItems[i] = myArr[i];
  }
  myItems[2] = parseInt(arr);
  return myItems;
  // Only change code above this line
}
console.log(myArrayFunction("6")); // change
module.exports = myArrayFunction;
