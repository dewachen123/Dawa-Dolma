// 1. Create a function named getEvenNumber that returns a Promise
function getEvenNumber(number) {
  return new Promise((resolve, reject) => {
    if (number % 2 === 0) {
      resolve(`${number} is even.`);
    } else {
      reject(`${number} is not even.`);
    }
  });
}

// 2. Use try/catch to await getEvenNumber() and log the result or error
async function checkNumber(number) {
  try {
    const result = await getEvenNumber(number);
    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    // 4. Always log this
    console.log("Number is finally even!");
  }
}

// 5. Create another async function loadData that waits 2 seconds and logs "Data loaded!"
async function loadData() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  console.log("Data loaded!");
}

// Example usage
checkNumber(4);     // Will resolve
checkNumber(7);     // Will reject
loadData();         // Logs after 2 seconds
