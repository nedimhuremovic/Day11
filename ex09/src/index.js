// Only change code below this line
function myBouncer(arr) {
    var removed;
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
    if (arr[i] === false || arr[i] === null || arr[i] === "" || arr[i] === 0 || arr[i] === undefined || arr[i] === NaN) {
      removed = arr.splice(i,1);
      i = 0;
    }
}
     return arr;
}
// Only change code above this line
console.log(myBouncer([444, "", 0, false, null, 8, undefined, "", true, 0, false])); // Change this line
module.exports = myBouncer;
