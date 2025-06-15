// 1. Function greetUser accepts a name and a callback function
function greetUser(name, callback) {
    console.log(`Welcome ${name}!`);
    callback(); // 2. Call the callback function
}

// 3. Callback function showTime logs the current time
function showTime() {
    console.log(`Current Time: ${new Date().toLocaleTimeString()}`);
}

// 4. Call greetUser with "Ram" and showTime callback
greetUser("Ram", showTime);


// 5. Function processOrder logs "Processing your order"
function processOrder(callback) {
    console.log("Processing your order...");
    callback(); // 7. Call the callback function
}

// 6. Function confirmOrder logs "Order confirmed!"
function confirmOrder() {
    console.log("Order confirmed!");
}

// Calling processOrder with confirmOrder as a callback
processOrder(confirmOrder);

// 1. Create a Promise that resolves after 2 seconds
const myPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Resolved successfully!");
    }, 2000);
});

// 2. Use .then() to log the resolved value
// 3. Use .finally() to log final execution message
myPromise
    .then(value => console.log(value))
    .finally(() => console.log("Finished executing promise"));


// 4. Create a Promise that rejects if a variable is not equal to 10
const checkVariable = (num) => {
    return new Promise((resolve, reject) => {
        if (num === 10) {
            resolve("Variable is 10, promise resolved!");
        } else {
            reject("Something went wrong");
        }
    });
};

// 5. Handling rejection using .catch()
checkVariable(5)
    .then(value => console.log(value))
    .catch(error => console.error(error));