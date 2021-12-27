// Challenge 1
// Create an array weekDays with all days of the week, console log the array

let myList = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

console.log(myList);

// Challenge 2
// Log ‘Monday’ and ‘Sunday’

console.log(myList[0]);
console.log(myList[6]);

// Challenge 3
// Change ‘Sunday’ by ‘Funday’
// Log the array

myList[6] = "Funday";
console.log(myList);

// Challenge 4
// Remove Monday and Tuesday
// Log the array

myList.shift(myList[0]);
myList.shift(myList[1]);
console.log(myList);

// Challenge 5
// Log every day of the week this way:`Temperature on Monday is 18 degrees’

console.log(`Temperature on ${myList[0]} is 18°`);
console.log(`Temperature on ${myList[1]} is 18°`);
console.log(`Temperature on ${myList[2]} is 18°`);
console.log(`Temperature on ${myList[3]} is 18°`);
console.log(`Temperature on ${myList[4]} is 18°`);
