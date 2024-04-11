// let a = 0;
//
// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         a = 1;
//         resolve(a)
//     }, 2000);
// }).then((b) => {
//     console.log(b);
//     return b;
// }).then((b) => {
//     console.log(b);
// }).catch((c) => {
//     console.log('catchが実行', c)
// })
//

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sum = nums.reduce((totalValue, currentValue) => totalValue + currentValue, 0);
// console.log(sum);


// const numObject = {
//     nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//     getSum() {
//         const nums = this.nums;
//         let sum = 0
//         for (let i = 0; i < nums.length; i++) {
//             sum += nums[i];
//         }
//         return sum;
//     },
// };
//
// console.log(numObject.getSum());
//
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// const getSum = (numberArray) => numberArray.reduce((totalValue, currentValue) => totalValue + currentValue);
//     // const nums = array;
//     // let sum = 0;
//     // for (let i = 0; i < nums.length; i++) {
//     //     sum += nums[i];
//     // }
//     // nums.forEach(currentValue => sum += currentValue);
//
// console.log(getSum(nums));
//

// const number1 = 10;
// const number2 = 30;
//
// const addTwoNumbers = (num1) => num1 + number2;
// console.log(addTwoNumbers(number1, number2));

// const numObject = {value: 2}
//
// const doubleValue = (object) => {
//     object.value = object.value * 2;
//     return object;
// };
//
// const newNumObject = doubleValue(numObject);
// console.log(numObject === newNumObject);
//
// const doubleValue2 = (object) => {
//     // object.value = object.value * 2;
//     // return object;
//     return {value: object.value * 2};
// };
//
// const newNumObject2 = doubleValue2(numObject);
// console.log('numObject2', newNumObject2);
// console.log(numObject === newNumObject2);
//






