// Function 2:
// convert minutes into seconds. Function will take one parameter that will be  a number of minutes, up to 2 decimal places. Convert it into seconds, and return that number. 

const convertFromMinToSec = (numMinutes) => (numMinutes * 60).toFixed(2);

console.log(convertFromMinToSec(6.24));