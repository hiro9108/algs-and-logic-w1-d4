// Function 4:
// convert celsius into fahrenheit into celsius, and vice versa.
// Function will take two parameters that will be  a temp either fahrenheit or celsius, up to 2 decimal places.
// The second argument will be either the letter ‘c’ or the letter ‘f’ to state whether the value given is starting in celsius or in fahrenheit.
// Convert the temp to the opposite unit, and return the value.  (35.6, ‘c’)

const convertTempUnit = (temp, unit) => {
  if (unit === 'c') {
    return ((temp * 9 / 5) + 32).toFixed(2) + ' f';
  } else if (unit === 'f') {
    return ((temp - 32) * 5 / 9).toFixed(2) + ' c';
  } else {
    return "You should type correct unit!";
  }
};

console.log(convertTempUnit(15.6, 'c'));