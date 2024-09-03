
//https://medium.com/@ecanyuksel/javascript-date-methods-the-most-commonly-used-date-methods-for-handling-the-dates-7daa938feaa1




// Tasks:
// -------
// Task 1: Get Current Date and Time

// - Input: None
// - Output: Current date and time (e.g., "2024-08-28T14:30:00.000Z")

// let date=new Date()
// console.log(date)

// Task 2: Add Days to Date

// - Input: Date string (e.g., "2024-08-28"), number of days to add (e.g., 3)
// - Output: New date string (e.g., "2024-08-31")

function addDaysToDate(dateString, daysToAdd) {
    // Parse the input date string
    const date = new Date(dateString);
    
    // Check if the date is invalid
    if (isNaN(date.getTime())) {
        throw new Error('Invalid date format');
    }

    // Add the days
    date.setDate(date.getDate() + daysToAdd);

    // Format the new date as a string in YYYY-MM-DD format
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

// Example usage:
const dateString = "2024-08-28";
const daysToAdd = 3;
const newDateString = addDaysToDate(dateString, daysToAdd);

console.log(newDateString); // Output: "2024-08-31"




// Task 3: Format Date as MM/DD/YYYY

// - Input: Date string (e.g., "2024-08-28")
// - Output: Formatted date string (e.g., "08/28/2024")

// let dt=new Date()
// y=dt.getFullYear()
// m=dt.getMonth()
// d=dt.getDate()
// console.log(m+"/"+d+"/"+y)

// Input date string
const inputDate = "2024-08-28";

// Parse the date string into a Date object
const date = new Date(inputDate);

// Extract the month, day, and year
const month = date.getMonth() + 1;  // Months are zero-based (0 = January, 1 = February, etc.)
const day = date.getDate();
const year = date.getFullYear();

// Format month and day to always have two digits
const formattedMonth = month < 10 ? '0' + month : month;
const formattedDay = day < 10 ? '0' + day : day;

// Construct the formatted date string
const formattedDate = `${formattedMonth}/${formattedDay}/${year}`;

// Output the formatted date
console.log(formattedDate);  // Output: "08/28/2024"



// Task 4: Get Number of Days Between Dates

// - Input: Two date strings (e.g., "2024-08-28", "2024-09-01")
// - Output: Number of days between dates (e.g., 4)

// Input date strings
const date1 = "2024-08-28";
const date2 = "2024-09-01";

// Parse the date strings into Date objects
const startDate = new Date(date1);
const endDate = new Date(date2);

// Calculate the difference in milliseconds
const differenceInMillis = endDate - startDate;

// Convert milliseconds to days
const millisPerDay = 24 * 60 * 60 * 1000;
const differenceInDays = Math.abs(differenceInMillis / millisPerDay);

// Round to the nearest whole number
const roundedDifferenceInDays = Math.round(differenceInDays);

// Output the number of days
console.log(roundedDifferenceInDays);  // Output: 4





//how to get current date
// const dt=new Date()

//converting to timestamp value
const timestamp=dt.getTime()
// console.log(timestamp)             //1725051604435         
const timestamp1=Date.now()
// console.log(timestamp1)               //1725051721417
// console.log(dt)              //2024-08-30T20:58:16.491Z     (UTC time format)





