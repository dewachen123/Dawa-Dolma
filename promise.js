// const result = new Promise((resolve, reject) => {
//     const gift = "stack";
//     if (gift.startsWith("spell")) { 
//         resolve("thank you for the gift"); 
//     } else { 
//         reject("I want a watch as a gift"); 
//     }
// });

// result.then(console.log).catch(console.error);

const getGift = new Promise((resolve, reject) => {
    const gift = "watch";
    if (gift.startsWith("watch")) {
        resolve("Thank you for the gift!");
    } else {
        reject("I want a watch as a gift.");
    }
});

getGift
    .then(response => {               ///promise chaining
        console.log(response);
        return "Now, I will wear the watch.";
    })
    .then(nextStep => {
        console.log(nextStep);
        return "Checking the time on the watch.";
    })
    .then(finalStep => {
        console.log(finalStep);
    })
    .catch(error => {
        console.error(error);
    });
