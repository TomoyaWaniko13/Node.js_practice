// async function processMyPromise() {
//
//     const myPromise = new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             resolve('this?that');
//         }, 2000);
//     });
//
//     const result = await myPromise;
//     console.log(result.split('?')[1]);
// }
//
// processMyPromise();


// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(200);
//     }, 2000)
// })
//
// myPromise
//     .then((r) => r * 2)
//     .then(console.log);

// console.log('first');
//
// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('second');
//     }, 2000)
//
// }).then(console.log).then(() => console.log('third'));


async function processPromise() {
    console.log('first');

    const myPromisef = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('second');
        }, 2000)
    });

    await myPromise.then(console.log).then(() => console.log('third'));
}

processPromise();