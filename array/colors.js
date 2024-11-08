colors = ["red", "green", "blue"]
// color[0] = "yellow"
// last = color.length
// color[last] = "pink"
// console.log(color)
// // Iterate using Loops over the colors Array:
// // for ( let i=0; i<color.length; i++) {
// //     console.log(color[i])
// // }

// // let i=0
// while (i< color.length) {
//     console.log(color[i])
//     i++;
// }

// for ( const colors of color) {
//     console.log(colors)
// }
// console.log(typeof color);
// console.log(color.length)

//Iterate using Loops over the colors Array:

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

//Iterate using Loops over the colors Array:
let i=0
while (i<colors.length) {
    console.log(colors[i])
    i++
}

for ( const color of colors){
    console.log(color)
}
//Array Methods:
//Use the push method to add another color to the end of the colors array.
colors.push("black")
console.log(colors)

// Use the pop method to remove the last color from the colors array.
colors.pop()
console.log(colors)

//Use the indexOf method to find the index of a specific color (e.g., "blue") in the colors array.
const index = colors.indexOf("blue")
console.log(index)

//Add and Iterate Over Properties:
//Log the colors array to see if the owner property is added.
colors.owner = "Priya"
console.log(colors)

for (const property in colors) {
    console.log(`${property}:${colors[property]}`)
}
