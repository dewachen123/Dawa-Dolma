const array=[1,2,3,4,5];
array.push(6,7);                            //added 2 new values
console.log(array);


array.pop();                                  // removed the last value of array
console.log(array);

console.log(array.length);


array.shift();                       //removed the 1st value of the array
console.log(array);


array.unshift("who","you");            //added the values at 1st of the array
console.log(array);

const array1=["haha",
    'hehe'
]
const newArray = array.concat(array1)           // added the data of two arrays
console.log(newArray)

const finalArray= newArray.slice(9);            //sliced remove through indexing
console.log(finalArray);