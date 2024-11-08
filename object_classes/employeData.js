class Employee {
    constructor (name,email,age,department,position,salary ) {
        this.name = name,
        this.email = email,
        this.age = age,
        this.department = department,
        this.position = position,
        this.salary = salary
    }
    introduce () {
        console.log(`Hello, I am ${this.name},${this.position}`)
    }
    displaySalary () {
        console.log(`"Salary : $ ${this.salary}"`)
    }
}

const newEmployee =  new Employee("priya", "priya@navgurukul.org", 30, "engineering", "Software Developer", 75000)
const manager = new Employee("shanti", "shanti@navgurukul.org", 45, "engineering", "Software Developer", 705000 ) 
console.log(newEmployee)
console.log(manager)
newEmployee.introduce()
newEmployee.displaySalary()
manager.introduce()
manager.displaySalary()