function countdown(startNumber) {
    const intervalId = setInterval(() => {
        console.log(startNumber);
        if (startNumber === 0) {
            clearInterval(intervalId);
        }
        startNumber--;
    }, 1000);
}
