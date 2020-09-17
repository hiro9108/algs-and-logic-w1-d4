// Function 3:
// convert hours into seconds. Take in a value of hours up to 4 decimal places, and convert it into seconds. 

const convertFromHoursToSec = (numHours) => (numHours * 3600).toFixed(4);

console.log(convertFromHoursToSec(5.321));