// Normal function
function greet(name) {
    console.log("Hello, " + name + "!");
}

// Using setTimeout
setTimeout(() => {
    console.log("This message is delayed by 2 seconds.");
}, 2000);

// Promise example
function asyncTask(success = true) {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve("Task completed successfully!");
        } else {
            reject("Task failed!");
        }
    });
}

// Calling everything together
greet("Alice");

asyncTask(true)
    .then(message => console.log(message))
    .catch(error => console.log(error));

console.log("This line runs immediately, before the Promise resolves.");
