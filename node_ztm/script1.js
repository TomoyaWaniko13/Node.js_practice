// const urls = [
//     "https://jsonplaceholder.typicode.com/users",
//     "https://jsonplaceholder.typicode.com/posts",
//     "https://jsonplaceholder.typicode.com/albums"
// ]
//
// Promise.all(urls.map(url => {
//     return fetch(url)
//         .then(people => people.json());
// }))
//     .then(array => {
//         // console.log(array[0]);
//     })
//     .catch(err => console.log("fix this: ", err))
//     .finally(data => console.log(data));

// const a = 10;
//
// const promise = new Promise((resolve, reject) => {
//     if (a === 10) {
//         resolve("Things worked!!");
//     } else {
//         reject("Things did not work...");
//     }
// })
//


// promise
//     .then(result => result + "!!!!!!!!")
//     .then(result2 => {
//         throw EvalError
//         console.log(result2);
//     })
//     .catch(() => {
//         console.log("Error...");
//     })

// const urls = [
//     "https://jsonplaceholder.typicode.com/users",
//     "https://jsonplaceholder.typicode.com//comments",
//     "https://jsonplaceholder.typicode.com//albums"
// ]
//
// Promise.all(urls.map(url => {
//     return fetch(url).then(resp => resp.json());
// }))
//     .then(results => {
//         console.log(results);
//     })


// const promise1 = new Promise((resolve,reject)=>{
//     setTimeout(resolve, 100, "resolved");
// })
//
// const promise2 = new Promise((resolve, reject)=>{
//     setTimeout(resolve, 2000, "resolved");
// })
//
// Promise.all([promise1,promise2])
//     .then(value => {
//         console.log(value);
//     })

// const urls = [
//     "https://jsonplaceholder.typicode.com/users",
//     "https://jsonplaceholder.typicode.com//comments",
//     "https://jsonplaceholder.typicode.com//albums"
// ]
//
// const promises = urls.map((url) => {
//     return fetch(url).then(r => r.json());
// })
//
// Promise.all(promises).then(results => {
//     console.log(results[0]);
//     console.log(results[1]);
// })

// const urls = [
//     "https://jsonplaceholder.typicode.com/users",
//     "https://jsonplaceholder.typicode.com//comments"
// ]
//
// const promises = urls.map((url) => {
//     return fetch(url).then(r => r.json());
// })
//
// Promise.all(promises)
//     .then(results =>{
//         console.log(results[0]);
//         console.log(results[1]);
//     })

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(r => r.json())
//     .then((r) => {
//         console.log(r);});

// async function fetchUsers() {
//     const resp = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await resp.json();
//     console.log(data);
// }
//
// fetchUsers();

// async function fetchUsers() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const result = await response.json();
//     console.log(result);
// }


// Promise.all(urls.map(url => {
//     return fetch(url).then(r => r.json());
// }))
//     .then(array => {
//         console.log(array[0]);
//     })

// const getData = async function () {
//     const [users, posts]
//         = await Promise.all(urls.map(url => {
//         return  fetch(url).then(r => r.json());
//     }))
//
//     console.log(users);
// };
//
// getData();

// const urls = [
//     "https://jsonplaceholder.typicode.com/users",
//     "https://jsonplaceholder.typicode.com/posts"
// ]
//
// const getData = async function () {
//     try {
//         const [users, posts]
//             = await Promise.all(urls.map(url => {
//             return fetch(url).then(r => r.json());
//         }));
//         console.log(users);
//     } catch (e) {
//         console.log(e);
//     }
// }
//
// getData();


// Promise.all(urls.map(url => {
//     return fetch(url).then(response => response.json());
// }))
//     .then(array => {
//         console.log(array[0]);
//         console.log(array[1]);
//     })
//     .catch(err => console.log(err))
//     .finally(data => console.log("extra", data));


// const getData2 = async function () {
//     const arrayOfPromises = urls.map(url => fetch(url));
//     for await(let request of arrayOfPromises) {
//         const data = await request.json();
//         console.log(data);
//     }
// };
//
// getData2();

// const basket = ["apples", "oranges", "grapes"];

// for (let i = 0; i < basket.length; i++) {
//     console.log(basket[i]);
// }

// basket.forEach(item => {
//     console.log(item);
// })

// for (const item of basket) {
//     console.log(item);
// }

// const basket = ["apples", "oranges", "grapes"];
//
// const detailedBasket = {
//     apples: 5,
//     orange: 10,
//     grapes: 10000
// };
//
// const basket = {
//     0: "apples",
//     1: "oranges",
//     2: "grapes"
// };
//
// for (const item of basket) {
//     console.log(item);
// }
//
// for (const item in detailedBasket) {
//     console.log(item);
// }
//
// for (const basketKey in basket) {
//     console.log(basketKey);
// }

// const object = {
//     a: 1,
//     b: 2,
//     c: 3
// }
//
// for (const objectKey in object) {
//     console.log(objectKey);
// }
//

// console.log(Number.MAX_SAFE_INTEGER);

// let myPokemon = {
//     raichu: {
//         species: "mouse Pokemon",
//         height: 0.8,
//         weight: 50
//     }
// }
//
// let weight3 = myPokemon?.pikachu?.height;
// console.log(weight3);
//
// if (myPokemon.pikachu && myPokemon.pikachu.weight) {
//     let weight2 = myPokemon.pikachu.weight;
//     console.log(weight2);
// } else {
//     let weight2 = undefined;
//     console.log(weight2);
// }

// const array = [100, 3225143550, 51500, 123];
// array.at(-2);

// const array = [100, 200, 300, 50000, 10];
// console.log(array.at(2));

// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((r) => r.json())
//     .then(console.log);

async function fetchPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
}
fetchPosts()