//task-1
// Declare an array
// Declare an array with 5 elements containing fruits
// console log the 3rd index element
// change the value of the 2nd index element to jambura
// console log the final array
//task-1 solution

let fruits = ["apple", "banana", "orange", "grape", "kiwi"];
// console.log("3rd index element:", fruits[2]);
fruits[1] = "jambura";
// console.log("Final array:", fruits);


//task-2

// Add or remove elements
// Declare an array of 3 tourist destinations
// Add a new tourist destination to your tourist array
// Add two more to your array
// Remove the last tourist destination you have added
// display the final array as output

//task-2 solution


let touristDestinations = ["Paris", "Tokyo", "Rome"];
touristDestinations.push("New York");
touristDestinations.push("London", "Sydney");
touristDestinations.pop();
// console.log("Final array:", touristDestinations);


//task-3
// Checking Array Membership with ‘includes’
// Instructions:
// Create an array of books containing different book.
// Use the includes method to check if the array contains a javascript book.
// Print a message to the console indicating whether the element is present in the array or not.

//task-3 solution

let books = ["To Kill a Mockingbird", "Harry Potter and the Philosopher's Stone", "1984", "The Great Gatsby", "The Catcher in the Rye"];
let containsJavascriptBook = books.includes("JavaScript: The Good Parts");
if (containsJavascriptBook) {
    // console.log("The array contains a JavaScript book.");
} else {
    // console.log("The array does not contain a JavaScript book.");
}


//task-4
// Checking if it's an Array
// Instructions:
// Create different variables, each containing either an array or a non-array value.
// Now use isArray to check if each variable is an array.
// Print a message to the console indicating whether each variable is an array or not.

//task-4 solution

let variable1 = [1, 2, 3];
let variable2 = "Hello";
let variable3 = { name: "John", age: 30 };
let variable4 = 123;
let variable5 = ["apple", "banana", "orange"];
let isArray1 = Array.isArray(variable1);
let isArray2 = Array.isArray(variable2);
let isArray3 = Array.isArray(variable3);
let isArray4 = Array.isArray(variable4);
let isArray5 = Array.isArray(variable5);
// console.log("Variable 1 is an array:", isArray1);
// console.log("Variable 2 is an array:", isArray2);
// console.log("Variable 3 is an array:", isArray3);
// console.log("Variable 4 is an array:", isArray4);
// console.log("Variable 5 is an array:", isArray5);

//task-5
// Combining Arrays
// Instructions:
// Create two arrays of your choice.
// Use the concat method to combine the two arrays into a new array.
// Print both the original arrays and the combined array using console.log().


//task-5 solution

let array1 = [1, 2, 3];
let array2 = ["a", "b", "c"];
let combinedArray = array1.concat(array2);
// console.log("Array 1:", array1);
// console.log("Array 2:", array2);
// console.log("Combined Array:", combinedArray);