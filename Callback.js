function countdown(startNumber, callback) {
    const intervalId = setInterval(() => {
        console.log(startNumber);
        if (startNumber === 0) {
            clearInterval(intervalId);
            if (callback) callback();
        }
        startNumber--;
    }, 1000);
}
