// Create variables
const city = "Kathmandu";
const city2 = "Bhaktapur";
console.log(`Welcome to ${city} & ${city2}`);

// Create an array and destructure values
const arr = [100, 200];
const [first, second] = arr;
console.log(first, second);

// Create an object and destructure values
const obj = { product: "Mobile", price: 20000 };
const { product, price } = obj;
console.log(product, price);

// Create a function with default parameters
function sayHi(name = "John Doe", place = "Kathmandu") {
    console.log(`Hi, ${name}. I am from ${place}`);
}
sayHi("Alice", "Bhaktapur");
sayHi();

// Use spread operator with arrays
const one = [1, 2];
const two = [...one, 3, 4, 5];
console.log(two);

// Use spread operator with objects
const user = { username: "admin" };
const newUser = { ...user, role: "superadmin" };
console.log(newUser);

// Function using rest parameters and reduce
function multiplyAll(...nums) {
    return nums.reduce((product, num) => product * num, 1);
}
console.log(multiplyAll(2, 3, 4));

///asyncronous, promise and callbacks