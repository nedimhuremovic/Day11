// Only change code below this line
function myMutation(arr) {
  var str1 = arr[0].toLowerCase();
  var povrat;
  for (var i = 0; i < arr[1].length; i++) {
    if (str1.includes(arr[1].toLowerCase().charAt(i))) {
      povrat = true;
    } else {
      povrat = false;
    }
    if (povrat == false) return povrat;
  }
  return povrat;
}
// Only change code above this line

console.log(myMutation(["Mary", "Army"])); // Change this line
module.exports = myMutation;
