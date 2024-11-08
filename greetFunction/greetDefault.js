const greetDefault = (name = "Guest") => {
    return `Hello ${name}`
}
let call = greetDefault()
console.log(call)