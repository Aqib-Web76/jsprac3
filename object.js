// // singleton
// // Object.create

// // object literals

// // const student = {
// //     name: "Aqib",
// //     FName: "Sameen",
// //     fullName: function () {
// //         return this.name + this.FName
// //     },
// //     marks: 94.9,
// //     score: [],
// //     printMarks: function () {
// //         console.log("marks =", this.marks)
// //     },
    
// // }; 

// // student.lastname = "Ahmad"

// // student.score.push(30)

// // var fullname = student.fullName()

// // console.log(fullname)
// // console.log(student.printMarks())
// // console.log(student.score[0])
// const student = {
//     name: "Aqib",
//     fName: "Sameen Khan Shinwari",
//     marks: 98.9,
//     printNames: function () {
//         console.log("marks = ",this.marks);
//     }
// };

// const employee = {
//     calcTax() {
//         console.log("tax rate is 10%")
//     },
// };

// const Aqib = {
//     salary: 15000,
//     calcTax() {
//         console.log("tax rate is 20%");
//     },
// };

// Aqib.__proto__ = employee; 

// class toyotaCar {
//     constructor(brand,mileage) {   //it is used for the initilize in the start 
//         console.log("create a new object")
//         this.brand = brand;
//         this.myleadge = mileage;

//     }
//     start() {
//         console.log("start")

//     }
//     stop() {
//         console.log("stop");
//     }
// };

// let fortuner = new toyotaCar("furtuner");
// console.log(fortuner)
// let lexus = new toyotaCar("lexus");
// console.log(lexus)
//INHERITANCE
class person  {
    constructor(name)
    {
        console.log("enter parent constructor");

        this.species = "homo sapians";
        this.name = name;
    }
    eat() {
        console.log("Aqib can eat")

    }
    drink() {
        console.log("Aqib can drink")
    }
}

class engineer extends person{
   
    constructor(name) {
        console.log("enter child constructor");
        super(name);//to invoke parent class constructor
        console.log("exit child constructor");

    }
    work() {
        super.eat();
        console.log("engineer Aqib can work")
    }
}
let engobj = new engineer("Aqib shinwari");
