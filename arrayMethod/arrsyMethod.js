//Define and Initialize the Array:

const numbers = [1,2,3,4,5]

//terate and Log Using forEach():
numbers.forEach(function (num) {
    console.log(num*2)
}
)

//Iterate and Create a New Modified Array Using map():
const squredNumbers = numbers.map(function (num) {
    console.log(num**2)
})
let squaredNumbers = numbers.map((num) => {
    return num**2
})
console.log(squaredNumbers)
//Iterate and Create a New Filtered Array Using filter():

const evenNumber = numbers.filter(function(num){
    if (num%2==0){
        console.log(num)
    }
})

const evenNumber2 = numbers.filter((num)=>{
    if(num%2==0){
        console.log(num)
    }
}) 
 
//Manipulating Temperatures

let temperatures = [-3,14,22,5,-10]

temperatures.forEach(function(num){
    console.log(num)
})

temperatures.forEach((num)=>{
    console.log(num)
})

temperatures.forEach((num)=>{
    console.log((num * (9/5))+32,"feriheight")
})

console.log(temperatures)

temperatures.forEach((num)=>{
    console.log((num * (9/5)+32))
})

//Iterate and Create a New Modified Array Using map():
 const temperaturesInFahrenheit = temperatures.map((num)=>{
    return (num * (9/5)) + 32;
 })
 console.log(temperaturesInFahrenheit)

 const temperaturesInFahrenheit2 = temperatures.map(function (num) {
    return (num * (9/5) + 32)
 })
console.log( temperaturesInFahrenheit2)

 //Iterate and Create a New Filtered Array Using filter():
const  belowFreezing = temperatures.filter(function(num){
    if(num > 0) {
        return num
    }
})
console.log(belowFreezing, "num")