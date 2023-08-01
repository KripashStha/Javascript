// In var we can both redeclare and update the variable
// var a = 10;
// var a = 20;
// console.log(a);
// var a = 10;
// a = 20;
// console.log(a);

// In let we can't redeclare the variable bu can update the variable
// let a = 10;
// let a = 20;
// console.log(a);
// let a = 10;
// a = 20;
// console.log(a);

// In const we can neither redeclare nor update the variable
// const a = 10;
// a = 20;          //throws typeerror
// console.log(a);

// Program to add two numbers
// let a = 10;
// let b = 20;
// let sum = a + b;
// console.log(sum);

// Program to find the area of a rectangle:
// let length = 20;
// let breadth = 90;
// let area = length * breadth;
// console.log(area);

// Program to swap two variables:
// let a = 2;
// let b = 3;
// swp = a
// a = b;
// b = swp;
// console.log(a, b);

// Program to calculate the factorial of a number:
// let factorial = 1;
// let a = 7;
// for (let i = 1; i<=a; i++){
//     factorial *= i;
// }
// console.log("The factorial of",a ,"is", factorial);

// Program to check if a number is even or odd:
// let a = 5;
// if (a % 2 === 0){
//     console.log("The number is even");
// }else{
//     console.log("The number is odd");
// }

// Program to convert Celsius to Fahrenheit:
// let celsius = 45;
// let fahrenheit = (celsius*9)/ 5 + 32;
// console.log(fahrenheit);

// Program to find the maximum of three numbers:
// let a = 10;
// let b = 20;
// let c = 30;
// if (b < a > c){
//     console.log(a,"is the max number")
// }else if (a < b > c){
//     console.log(b, "is the max number")
// }else{
//     console.log(c, "is the max number")
// }

// Program to calculate the sum of an array:
// let array = [1,2,3,4,5];
// sum = 0;
// for (i=0; i< array.length; i++){
//     sum += array[i]
// }
// console.log(sum);

// Program to check if a string is a palindrome:
// let a = "batab"
// let reverse = a.split("").reverse().join("");
// if (a === reverse){
//     console.log("It is a Palindrome")
// }else{
//     console.log("Not a Palindrome")
// }

// Program to generate a random number between 1 and 10:
// let randomnum = Math.floor(Math.random()*10) + 1;
// console.log(randomnum);

// Ternary Operator
// let age = 18;
// let isadult = age >= 18 ? "Yes" : "No";
// console.log(isadult);

// Write a function that takes an array of integers as input and returns the two numbers that add up to a specific target sum. If there are multiple pairs that satisfy the condition, return any one of them. If no pair is found, return null.
function findsum(list){
    num = Math.floor(Math.random()*10) + 1;
    console.log(num);
    for (let n of list){
        sum = [n + n]
        if (sum === num);{
            console.log(sum);
            return sum;  
        }
        console.log("null")
        
          
    }
}
console.log(findsum([1,2,3,4,5,6]));
  