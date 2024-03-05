// Task-1
// You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.
// Input:
// The first line of the input is the taka you have. The second line is the cost of 1 kg of oranges and 1 kg of apples.
// Output:
// Print the result.
// Sample Input:
// 1000
// 700
// Sample Output:
// 300

// task-1: Solution
var money = 1000;
var orangePrice = 500;
var applePrice = 200;
var totalFruitPrice = orangePrice + applePrice;
var moneyHave = money - totalFruitPrice;
// console.log(moneyHave);


// Task-2
// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

// Input:
// The first line of the input is the marks of the five subjects mentioned above, respectively.

// Output:
// Print the result in 2 decimal places.

// Sample Input:
// 75.25, 65, 80, 35.45, 99.50

// Sample Output:
// 71.04

//task-2: Solution
var Mathematics = 75.25;
var Biology = 65;
var Chemistry = 80;
var Physics = 35.45;
var Bangla = 99.50;
var totalMarks = Mathematics + Biology + Chemistry + Physics + Bangla;
var avgMarks = totalMarks / 5;
// console.log(avgMarks.toFixed(2));


// Task-3
// You task is to divide the given number by 5 and show the remainder as the output.

// Input:
// The first line of the input contains the number.

// Output:
// Print the remainder.

// Sample Input:
// 119

// Sample Output:
// 4

//task-3 : Solution
var number = 119;
var remainder = 119 % 5;
// console.log(remainder);


// Task-4
// What will be the result of the following codes:

// var a = isNaN(‘11’);

// var a = isNaN(2-10);

// task-4 : Solution

var b = isNaN('11');
console.log(b);
var a = isNaN(2-10)
console.log(a);

