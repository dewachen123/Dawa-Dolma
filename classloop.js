// Create an array of numbers from 1 to 10
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use map() to create a new array where each number is doubled
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);

// Use map() to create an array of strings like "Number: 1", "Number: 2", etc.


// // Use filter() to return only even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

// // Use filter() to return numbers greater than 5
const greaterThanFive = numbers.filter(num => num > 5);
console.log(greaterThanFive);
// // Use find() to get the first number greater than 3
const firstGreaterThanThree = numbers.find(num => num > 3);
console.log(firstGreaterThanThree);
// // Use find() to get the first number divisible by 4
const firstDivisibleByFour = numbers.find(num => num % 4 === 0);
console.log(firstDivisibleByFour);
// // Use some() to check if there is any number less than 0
const hasNegative = numbers.some(num => num < 0);
console.log(hasNegative);
// // Use some() to check if any number is greater than 8
// const hasGreaterThanEight = numbers.some(num => num > 8);

// // Use every() to check if all numbers are less than or equal to 10
// const allLessThanOrEqualToTen = numbers.every(num => num <= 10);

// // Use every() to check if all numbers are positive
// const allPositive = numbers.every(num => num > 0);

// // Use forEach() to log each number multiplied by its index
// numbers.forEach((num, index) => console.log(num * index));

// // Use forEach() to log whether the number is even or odd
// numbers.forEach(num => console.log(num % 2 === 0 ? 'even' : 'odd'));


// // Use reduce() to calculate the sum of all numbers
// const totalSum = numbers.reduce((acc, curr) => acc + curr, 0);

// // Use reduce() to find the maximum value in the array
// const maxNumber = numbers.reduce((max, curr) => (curr > max ? curr : max), numbers[0]);

