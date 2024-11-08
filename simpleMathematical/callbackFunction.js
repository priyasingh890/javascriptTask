//Define Callback Functions:
// const doubleNumber = (num) => {
//     return num*2
// }

// const squareNumber = (num) => {
//     return num*num
// }

// const incrementNumber = (num) => {
//     return num + 1
// }

 const addNumbers = (num1, num2) =>{
     return num1 + num1
 }

const multiplyNumbers = (num1,num2) => {
    return num1 * num2
}

const subtractNumbers = (num1, num2) =>{
    return num1 - num2
}

const divideNumbers = (num1 , num2) =>{
    return num1/num2
}
// // console.log(add(5))
// console.log(doubleNumber(5))
// console.log(squareNumber(5))
// console.log(squareNumber(6))

// //Define performOperation Function:

// const performOperation = (num, operation) => {
//     return operation(num)
// }
// performOperation(8, function(num){
//     console.log(num)
// })

// //Call performOperation with Callback Functions:
// console.log(performOperation(5, doubleNumber))
// console.log(performOperation(5, squareNumber ))
// console.log(performOperation(5, incrementNumber ))

// Define performArithmetic Function:

// const addNumbers = (num1, num2) =>{
//     return num1 + num2
// }

const performArithmetic = (num1, num2, operation) => {
   return operation(num1, num2)
}

console.log(performArithmetic(5, 3, addNumbers))
console.log(performArithmetic(5, 3, multiplyNumbers))
console.log(performArithmetic(5, 3, subtractNumbers))
console.log(performArithmetic(5, 3, divideNumbers))
