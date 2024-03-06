//making decision in ur code ====>> i have to read it.


/***
 * task-1
 * 
Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

//task-1 solution

let burgerPrice = 510;
let cokePrice = 30;
if(burgerPrice > 500){
    // console.log('you got a free coke');
}
else{
    // console.log('You have to buy a coke.Coke price is:', cokePrice)
}

/*** 
task-2

BMI Calculator and Health Category
Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.
    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.
*/
var weight = 70; 
var height = 400; 

height /= 100;
BMI = weight/ (height)^2
var healthCategory;
if (BMI < 18.5) {
    healthCategory = "underweight";
} else if (BMI >= 18.5 && BMI <= 24.9) {
    healthCategory = "normal";
} else if (BMI >= 25 && BMI <= 29.9) {
    healthCategory = "overweight";
} else {
    healthCategory = "obese";
}

// console.log("BMI:", BMI);
// console.log("Health Category:", healthCategory);

/***
task-3

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

// task-3 solution

let score = 40;
const numericScore = parseInt(score);
if (numericScore >= 90 && numericScore <= 100) {
    // console.log("Grade: A");
} else if (numericScore >= 80 && numericScore <= 89) {
    // console.log("Grade: B");
} else if (numericScore >= 70 && numericScore <= 79) {
    // console.log("Grade: C");
} else if (numericScore >= 60 && numericScore <= 69) {
    // console.log("Grade: D");
} else if (numericScore >= 0 && numericScore <= 59) {
    // console.log("Grade: F");
} else {
    // console.log("Invalid score");
};

/***
task-4
if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/
//task-4 solution


const yourScore = 15;
const friendScore =  45;

if (yourScore >= 80) {
    // console.log(friendScore);
    
    if (friendScore > 80) {
        // console.log("Go for a lunch with your friend.");
    } else if (friendScore >= 60) {
        // console.log("Tell your friend, 'Good luck next time.'");
    } else if (friendScore >= 40) {
        // console.log("Keep your friend's message unseen.");
    } else {
        // console.log("Block your friend.");
    }
} else {
    // console.log("Go to home and sleep. Act sad.");
};

/***
task-5
you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

//task-5 solution
//simple if-else. 

const num1 = 10;
const num2 = 5;
let result;

if (num1 > num2) {
    result = num1 * 2;
} else {
    result = num1 + num2;
}
// console.log("Result:", result);

//using ternary operator.

const numb1 = 10;
const numb2 = 5;

const result2 = numb1 > numb2 ? numb1 * 2 : numb1 + numb2;
// console.log("Result:", result);

/***
task-6
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
//task-6 solution

const age = 5;

let ticketFare;

if (age < 10) {
    ticketFare = 0; 
} else if (age >= 60) {
    ticketFare = 800 - (800 * 0.15); 
} else {
    ticketFare = 800;}

// console.log("Ticket fare:", ticketFare, "tk");


