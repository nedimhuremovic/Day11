// Create a monitorsListArray array here
    var monitorsListArray = ["Apple","Peach","Berry"];
// End of monitorsListArray array

function myMonitorsFunction(arr) {
    var newMonitorsList=[...arr];
    // Only change code below this line
        var monitorList = [];
        var temp;
        for (let i = 0; i < 3; i++) {
            temp = [newMonitorsList[i], i+1];
            monitorList.push(temp);
        }

        return monitorList;
    // Only change code above this line
}

console.log(myMonitorsFunction(monitorsListArray)); // Change this line
module.exports = myMonitorsFunction;