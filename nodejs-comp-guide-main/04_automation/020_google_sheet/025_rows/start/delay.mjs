function delay(ms) {
    return new Promise((resolve, reject) => {
        if (ms < 0) {
            reject('delay cannot be negative...');
        } else {
            setTimeout(() => resolve('done!'), ms);
        }
    })
}

export {delay};

// async function runDelay() {
//     try {
//         const result = await delay(1000);
//         console.log(result);
//         await delay(-100);
//     } catch (e) {
//         console.log(e);
//     }
// }

// runDelay();