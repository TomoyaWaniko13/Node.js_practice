// const number = 4;
//
// const fnArrow = (n) => n * 3;
//
// function fn(callback) {
//     const result = callback;
//     console.log(result);
// }
//
// fn(fnArrow(3));

// const array = [10, 20, 30, 40];
//
// const newArray2 = array.map(val => val * 2);
// console.log(newArray2);
//
// const newArray3 = newArray2.filter(val => val > 50);
// console.log(newArray3);

// const array = ["element1", "element2", "element3"];
// const [a, ...b] = array;
// console.log(b);
//
// const obj ={
//     x: "Object1",
//     y: "Object2",
//     z: "Object3"
// }
//
// const arr = ["Japan", "Tokyo", "Shinjuku"];
//
// const fnArray = ([country, state, city]) => {
//     console.log("---Array---");
//     console.log(`country: ${country}`);
//     console.log(`Tokyo: ${state}`);
//     console.log(`city: ${city}`);
// }
//
// fnArray(arr);
//
// const objAddress = {country: "Japan", state: "Tokyo", city: "Shinjuku"}
//
// const fnObj = ({country, state, city}) => {
//     console.log(`country: ${country}`);
//     console.log(`Tokyo: ${state}`);
//     console.log(`city: ${city}`);
// }
//
// fnObj(objAddress);

// const nums = [3, 1, 4, 5, 10, 2, 6];
//
// const max = Math.max(...nums);
// console.log(max);
//
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let newArr = [...arr1];
//
// const obj = {
//     name: "Tom",
//     age: 22
// }
//
// const newObj = {...obj};
// console.log(newObj);

// const a = 0;
// let resultA = a ? 10 : -10;
// console.log(resultA);
//
// console.log(Boolean(a));

// let a = 0;
// console.log(a);
//
// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         a = 1;
//         resolve();
//     }, 2000)
// }).then(() => {
//     console.log("Finished");
//     }
// )

let a = 0;

async function init() {
    const result = await new Promise((resolve, reject) => {
        setTimeout(() => {
            a = 1;
            resolve(a);
        },2000)
    })
    console.log(result);
}

init();
console.log("I am waiting??");