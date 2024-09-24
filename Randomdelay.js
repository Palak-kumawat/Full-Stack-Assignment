function randomDelayMessage(message) {
    const randomDelay = Math.floor(Math.random() * 5000) + 1000;
    return wait(randomDelay).then(() => {
        console.log(message);
    });
}

// Test case
randomDelayMessage("Random message after random delay");
