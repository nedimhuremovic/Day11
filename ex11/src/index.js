// Only change code below this line

function splitArrayInGroups(arr, n) {
  var result = [];
  var tempArr = [];
  var temp;
  for (let j = 0; j < n; j++) {
    for (let i = 0; i < n; i++) {
      temp = arr.shift();
      if (temp !== undefined) tempArr.push(temp);
    }
    if(tempArr.length !== 0)
    result.push(tempArr);
    tempArr = [];
  }
  return result;
}

// Only change code above this line
console.log(splitArrayInGroups([0,1,2,3,4,5,6,7,8], 2)); // Change this line
module.exports = splitArrayInGroups;
