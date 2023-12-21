// // let box;
// // console.log(typeof (box));
// //
// // box = "hello";
// // console.log(typeof (box));
// //
// // box = 100;
// // console.log(typeof (box))
// //
// //
//
// function getProduct(id) {
//     return {
//         id: id,
//         name: `Awesome Gadget ${id}`,
//         price: 99.5
//     }
// }
//
// const product = getProduct(1);
// console.log(product.name);

interface Product {
    id: number,
    name: String,
    price: number;
}

function getProduct(id): Product {
    return {
        id: id,
        name: `Awesome Gadget ${id}`,
        price: 99.5
    }
}

const product = getProduct(1);
console.log(`The product ${product.name} costs`)