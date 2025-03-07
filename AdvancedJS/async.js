// Log 'one' to the console immediately
console.log('one');

// Set a timeout to log 'two' after a delay of 0 milliseconds.
// Despite the delay being 0, this will still be executed after the current synchronous code.
setTimeout(() => {
    console.log('two');
}, 0);

// Log 'three' to the console immediately after setting the timeout
console.log('three');

// Set an interval to log 'four' every 2000 milliseconds (2 seconds)
setInterval(() => {
    console.log('four');
}, 2000);

// Log 'five' to the console immediately after setting the interval
console.log('five');
