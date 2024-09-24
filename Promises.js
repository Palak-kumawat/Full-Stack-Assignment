function wait(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

// Test wait function
wait(2000).then(() => console.log("Waited for 2 seconds"));
