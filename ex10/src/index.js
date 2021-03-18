// Only change code below this line
    function mySplice(arr1, arr2, n) {
      var tempArray = [...arr2];
      
      for (let i = arr1.length-1; i >= 0; i--) {
         tempArray.splice(n,0,arr1[i]);
        n++;                      
       }
       return tempArray;
    }
  // Only change code above this line
  console.log(mySplice([1,2,3],[4,5],2)); // Change this line
  module.exports = mySplice;
  