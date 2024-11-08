const  areaOfRectangle = (length, width) => {
    return length * width
}
console.log(areaOfRectangle(3,7))

const areaOfCircle = (radius) => {
    return 3.14 * radius ** 2;
};
console.log(areaOfCircle(5));

const  areaOfTriangle = (base, height) => {
    return 0.5 * base * height
}
console.log(areaOfTriangle(5, 7))

// Define calculatePaintingCost Function
const calculatePaintingCost = (dimension1, dimension2, calculateArea ) => {
    const area = calculateArea(dimension1, dimension2)
    console.log(area,"1")
    const costPerUnit = 2;
    const totalCost = area * costPerUnit
    return totalCost

}
calculatePaintingCost(10, 5, areaOfRectangle)
calculatePaintingCost(3,null, areaOfCircle)
calculatePaintingCost(6, 8,  areaOfTriangle)