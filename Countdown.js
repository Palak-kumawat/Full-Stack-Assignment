function countdown(startNumber) {
    return new Promise(resolve => {
        const intervalId = setInterval(() => {
            console.log(startNumber);
            if (startNumber === 0) {
                clearInterval(intervalId);
                resolve();
            }
            startNumber--;
        }, 1000);
    });
}

// Example test case
countdown(5).then(() => console.log("Countdown finished!"));
