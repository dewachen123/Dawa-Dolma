// const num =[1,2,3,4];
// //array.map => transform each element and return and new array(data manipulate garera naya array banaunu)
// const halfed =num.map((data) => data/2); 
// console.log(halfed);

//array.filter =>returns elements that match the condition 

// const nums=[1,2,3,4];
// const evens =nums.filter(n=>n% 2==0);
// console.log(evens)


//array.find=> find first element matching condition
// const found =nums.find(n=>n>0);               //first num printed.
// console.log(found)

const nums=[1,2,3];
// const hasEven = nums.some(n=> n%2==0);                  //checks if any elements match condition 
// console.log(hasEven);

// const positive =nums.every(n=>n>=1);       //checks if every elements elements match the condition print true else print false
// console.log(positive);

// nums.forEach ((data,index)=>{
//     console.log(data*index);
// })

// const sum =nums.reduce ((acc,curr)=> acc+curr ,0);          //reduce array to a single value 
// console.log(sum);

// Create an array of numbers from 1 to 10
const num=[1,2,3,4,5,6,7,8,9,10];
// Use map() to create a new array where each number is doubled
const doubled= num.map((data)=>data*2);
console.log(doubled);
// Use map() to create an array of strings like "Number: 1", "Number: 2", etc.
const stringNum =num.map(num=>'number:{num}');
// Use filter() to return only even numbers
const evens =nums.filter(n=>n% 2==0);
// Use filter() to return numbers greater than 5
const greater =nums.filter(n=>n>5 );
// Use find() to get the first number greater than 3

// Use find() to get the first number divisible by 4

// Use some() to check if there is any number less than 0

// Use some() to check if any number is greater than 8

// Use every() to check if all numbers are less than or equal to 10

// Use every() to check if all numbers are positive

// Use forEach() to log each number multiplied by its index

// Use forEach() to log whether the number is even or odd

// Use reduce() to calculate the sum of all numbers

// Use reduce() to find the maximum value in the array