// for(let i = 0; i<=50;i+=2){
//     console.log("i: ",i)
// }
// i=i+2

// function getLargest(arrx){
//     let max = arrx[0]
//     for(let i of arrx){
//         if(i>max){
//             max = i
//         }
//     }
//     return max
// }
// console.log(getLargest([1,2,33,4,5,6,7,8,9,10]))


// const getSquare = (x) => {
//     return x*x
// }

// let numbers = [1,2,3,4,5,6,7,8,9,10]

// let squares = numbers.filter((x)=>{
//     return x%3===0
// })
// console.log("squares: ",squares)qwejrhqlwierS

// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const success = true;
//             if (success) {
//                 resolve("Data fetched successfully!");
//             } else {
//                 reject("Error fetching data.");
//             }
//         }, 2000);
//     });
// }
  
// async function displayData() {
//     const data = await fetchData();
//     console.log(data);
// }

// displayData();




// async function getUserData() {
//     try {
//         const response = await	fetch("https://jsonplaceholder.typicode.com/users/1");
//         const user = await response.json();
//         console.log(user);
//     } catch (error) {
//         console.error("Error fetching user data:", error);
//     }
// }
// getUserData();


// 1. Path Module
const path = require('path');

// const filePath = './task.txt';
// console.log(path.basename(filePath));
// console.log(path.dirname(filePath)); 
// console.log(path.extname(filePath));
// console.log(path.join('folder', 'file.txt'));

// const crypto = require('crypto');

// const hash = crypto.createHash('sha256');
// hash.update('mySecretPassword');
// console.log('Password Hash:', hash.digest('hex'));

// console.log("ASdfasd: ", crypto.verify('sha256', 'mySecretPassword', hash))

const process = require('process');

console.log('Environment:',  process.env);
console.log('Process ID:', process.pid); 