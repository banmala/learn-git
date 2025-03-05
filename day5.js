// const sum = (x,y, output ) => {
//     let temp = x+y;
//     output(temp)
// }

// sum(10,20,(summ)=>{console.log("sum: ", summ)})


// console.log("First")
// setTimeout(()=>{
//     console.log("Time Out Completed")
// },3000)
// console.log("Last")

// async/await 

// const  func1 = async () => {
//     console.log("First")
//     await setTimeout(() => {
//         console.log("Time Out Completed")
//     }, 3000)
//     console.log("Last")
// } 
// func1()

const fs = require("fs")

fs.readFile("product.js",'utf8',(err,data)=>{
    if(err){
        console.log("Error: ",error)
    }else{
        console.log("Data: ", data)
    }
})