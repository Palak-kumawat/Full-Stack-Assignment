function delayedLogSequence(messages) {
    let promiseChain = Promise.resolve();

    messages.forEach(({ message, delay }) => {
        promiseChain = promiseChain.then(() => wait(delay).then(() => console.log(message)));
    });

    return promiseChain;
}

// Test case
delayedLogSequence([
    { message: "First message", delay: 1000 },
    { message: "Second message", delay: 2000 },
    { message: "Third message", delay: 3000 }
]);
