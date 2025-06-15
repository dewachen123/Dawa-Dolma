//for=> when you know how many times to run
// for (let i=0; i<5; i++){                                // +1 in each num(i++)
//     console.log(i);
// }



// for(let i=5; i>0; i-- ){
//     console.log(i);
// }
 

//while=> loop util a condition becomes false

// let i=0;
// while (i<5){
//     console.log(i)
//      i++;
// }

//do..while => run at least once before checking the condition

// let j=0;
// do{
 //     j++;
// } while(j<5);

//for..in =>loop through object keys (properties)

// const obj ={a: 1 ,b:2 };
// for(let key in obj) {
//     console.log(key,obj[key]);
// }

//for..of =>loop through iterable values(array,strings,etc.)


// Use a for loop to print numbers from 1 to 10
// for (let i=1; i<11; i++){                                // +1 in each num(i++)
//    console.log(i);
// }
// Use a for loop to print numbers from 10 to 1
// for (let i=11; i>0; i--){
//     console.log(i);
// }
// Use a while loop to print all even numbers less than 10
// let i=0;
// while (i<11){
//     console.log(i)
//      i+=2;
// }
// Create an object with 3 properties (e.g. name, age, country)
// const obj ={nepal,c:10 ,anup};
// for(let key in obj) {
//     console.log(key,obj[key]);
// }
// Use for...in to log all keys and their values from the object



// Create an array with 5 numbers
// const array=[1,2,3,4,5]
// // Use for...of to print each number from the array
// for (const number of array) {
//   console.log(number);
// }
// Create a string "Hello"
const string="hello"
// Use for...of to print each character from the string
for (const char of string) {
  console.log(char);
}