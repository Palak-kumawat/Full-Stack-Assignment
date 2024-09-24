async function delayedLogSequence(messages) {
    for (const { message, delay } of messages) {
        await wait(delay);
        console.log(message);
    }
}

// Test case
delayedLogSequence([
    { message: "First message", delay: 1000 },
    { message: "Second message", delay: 2000 },
    { message: "Third message", delay: 3000 }
]);
