function repeatAction(action, interval, duration) {
    return new Promise(resolve => {
        const intervalId = setInterval(action, interval);
        setTimeout(() => {
            clearInterval(intervalId);
            resolve();
        }, duration);
    });
}

// Test case
repeatAction(() => console.log("Repeating action"), 1000, 5000).then(() => {
    console.log("Repeating action stopped after 5 seconds");
});
