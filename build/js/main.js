"use strict";
let myname = "Angshu";
let age = 23;
let sum = (a, b) => a + b;
let unionType = "dkjfsk";
unionType = 88;
// unionType = true;  this would give error
// ***************************** ARRAYS ********************************
let stringArr = ["angshu", "das"];
let numArr = [1, 2, 3];
let mixedArr = ["angshu", 24, true];
mixedArr = stringArr;
mixedArr = numArr;
// numArr = mixedArr ---> not possible
// ********************************** TUPLE ********************************
let myTuple = ["angshu", 22, true];
mixedArr = myTuple;
/*
// works same as above
interface Student{
  name : string,
  age : number,
  active? : boolean // -> optional
}

*/
let a = {
    name: "angshu",
    age: 22,
    active: true
};
// a.class = 5; --> can't add new properties
// ********************************* ENUMS ***************************
var grades;
(function (grades) {
    grades[grades["A"] = 100] = "A";
    grades[grades["B"] = 101] = "B";
    grades[grades["C"] = 102] = "C";
    grades[grades["D"] = 500] = "D";
    grades[grades["F"] = 501] = "F";
})(grades || (grades = {}));
console.log(grades.A, grades.B, grades.D, grades.F); // OUTPUT : 100
let ang = {
    name: "hello",
    age: 22
};
console.log(ang);
// ***************************** LITERAL TYPES ****************************
let admin;
/* interface for mathfunction
interface MathFunction {
  (a:number,b:number) : number
}

*/
let sub = (a, b) => a - b;
let total = (...rest) => {
    return rest.reduce((prev, curr) => prev + curr, 0);
};
console.log(total(1, 2, 3, 4));
// ********************************* DOM ***************************
const myimg = document.getElementById("myid");
console.log(myimg.src);
// ****************************** CLASS ******************************
class coder {
    constructor(name, age, // once assigned can't be changed
    lang1, lang2 = "typescript") {
        this.name = name;
        this.age = age;
        this.lang1 = lang1;
        this.lang2 = lang2;
        this.name = name;
        this.age = age;
        this.lang1 = lang1;
        this.lang2 = lang2;
        this.id = ++coder.count;
    }
}
coder.count = 0;
coder.getCount = () => coder.count;
const c1 = new coder("angshu", 22, "js");
const c2 = new coder("rahul", 22, "js");
console.log(c1.id);
console.log(c2.id);
console.log(coder.getCount());
