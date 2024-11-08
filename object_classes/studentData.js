const students = {   name : "priya", 
                    email : "priyasingh21@navgurukul.org",
                    age : 20,
                    greet() {console.log(`hello, ${this.name}`)},
                    address : {country : "India", pin_code : 241202, city : "baglore"}
                }
students["age"] = 22  
students.address.pin_code = 456789         
console.log(students)
students.greet()
console.log(students.address.country)


// Add Method and Nested Object to student:
friend = {
    name : "ranjana", 
    email: "ranjana@gmail.com", 
    age:22, 
    address:"lucknow",
    greet(){console.log(`hello, ${this.name}`)}
}

//Define and Use the Student Class:
 class Student {
    constructor(name, email, age, country, city, pin_code) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.address = {
            country:country,
            city:city,
            pin_code: pin_code
        };
    }
    greet() {
        console.log(`Hello, ${this.name}!`);
    }
    getFullAddress() {
        console.log(`Hello, ${this.name}, ${this.address.country} - ${this.address.pin_code}`);

    }
 }
 const student = new Student("Priya", "priyasingh21@navgurukul.org", 20, "India", "Delhi","110001" )
 const student1 = new Student("Priya", "priyasingh21@navgurukul.org", 20, "India", "Delhi", "110001");
const student2 = new Student("Ranjana", "ranjana@gmail.com", 22, "India", "Lucknow", "226001");
const student3 = new Student("Amit", "amit@gmail.com", 25, "India", "Mumbai", "400001");
const myStudent = new Student("Priya", "priyasingh21@navgurukul.org", 20, "India", "Delhi", "110001");
const friendStudent = new Student("Ranjana", "ranjana@gmail.com", 22, "India", "Lucknow", "226001");
const anotherStudent = new Student("Amit", "amit@gmail.com", 25, "India", "Mumbai", "400001");
console.log(student1)
console.log(student2)
console.log(student3)
console.log(myStudent);
console.log(student);
console.log(friendStudent);
console.log(anotherStudent);
student.greet();
student.getFullAddress()


