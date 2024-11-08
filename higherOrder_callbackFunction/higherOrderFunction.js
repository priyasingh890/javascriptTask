// const higherOrderFunction = (num, callback) => {
//     callback(num)
// }
// higherOrderFunction(5,function(num){console.log(num)})



const callbackFunction = (num, callback) => {
    callback(num)
}
callbackFunction(5, function(num){console.log(num)})

//Call Higher Order Function with a Function Expression as Callback:
// const higherOrderFunction = function(num,callback){
//     callback(num)
// }
// console.log(higherOrderFunction(10,function(num){console.log(num)}))

//Callback to Log Square of the Number:
const higherOrderFunction = (num, callback) =>{
    callback(num)
}
higherOrderFunction(5, function(num){
    console.log(num*num)
})

//Callback to Log Sum of Two Numbers:
const newHigherOrderFunction = (num1,num2,callback) =>{
    callback(num1,num2)
}
newHigherOrderFunction(3,7,function(num1,num2){console.log(num1+num2)})