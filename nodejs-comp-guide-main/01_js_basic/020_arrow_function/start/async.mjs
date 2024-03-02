function doAsync() {
    const randomNumber = Math.random();
    console.log(randomNumber);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (randomNumber > 0.5) {
                resolve('success!');
            }else{
                reject('fail...');
            }
        }, 1000);
    })
}

doAsync().then(console.log).catch(console.error);


// doAsync()
//     .then((successMessage) => {
//         console.log(successMessage);
//     })
//     .catch((errorMessage)=>{
//         console.log(errorMessage);
//     })

// function doAsync(successCallback, errCallback) {
//     const randomNumber = Math.random();
//     console.log(randomNumber);
//
//     setTimeout(() => {
//         if (randomNumber > 0.5) {
//             successCallback('task completed successfully');
//         } else {
//             errCallback('task failed');
//         }
//     }, 1000);
// }
//
// doAsync(
//     (successMessage) => {
//         console.log(successMessage);
//     }
//     , (errorMessage) => {
//         console.log(errorMessage);
//     }
// );
//
