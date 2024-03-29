let myname: string  = "Angshu";
let age : number = 23;

let sum = (a : number, b : number) : number => a + b;

let unionType : string | number = "dkjfsk";
unionType = 88;
// unionType = true;  this would give error

// ***************************** ARRAYS ********************************
let stringArr : string[] = ["angshu","das"];
let numArr : number[] = [1,2,3];
let mixedArr : (number | string | boolean)[] = ["angshu",24,true];

mixedArr = stringArr;
mixedArr = numArr;

// numArr = mixedArr ---> not possible


// ********************************** TUPLE ********************************
let myTuple : [string,number,boolean] = ["angshu",22,true];

mixedArr = myTuple; 
// myTuple = mixedArr; ---> not allowed as they can be in any order



// **************************** OBJECT *************************************

type Student = {
  name : string,
  age : number,
  active? : boolean // -> optional
} 


/*
// works same as above
interface Student{
  name : string,
  age : number,
  active? : boolean // -> optional
}

*/

let a : Student = {
  name : "angshu",
  age : 22,
  active : true
};

// a.class = 5; --> can't add new properties


// ********************************* ENUMS ***************************

enum grades{
  A = 100,  // default is 0
  B,
  C,
  D = 500,
  F
}

console.log(grades.A,grades.B,grades.D,grades.F); // OUTPUT : 100



// ********************************* TYPE ALIAS **********************


type stringOrNumber = (string | number);
type stringOrNumberArray = (string | number)[];

type collegeStudent = {
  name : string,
  age : number,
  // can be used one inside another
  // not true for interfaces
  subjects? : stringOrNumberArray,
}
let ang : collegeStudent = {
  name : "hello",
  age : 22
}

console.log(ang);

// ***************************** LITERAL TYPES ****************************

let admin : "Angshu" | "Rahul" | "Sanju";

// admin = "radha";  --> not possible

// ***************************** FUNCTIONS ******************************

type MathFunction = (a : number, b : number )=> number;

/* interface for mathfunction
interface MathFunction {
  (a:number,b:number) : number
}

*/

let sub: MathFunction = (a,b)=>a-b;


let total = (...rest:number[]):number =>{
  return rest.reduce((prev,curr)=>prev+curr,0);
}

console.log(total(1,2,3,4));


// ********************************* DOM ***************************

const myimg = document.getElementById("myid") as HTMLImageElement;
console.log(myimg.src);


// ****************************** CLASS ******************************
class coder{
  
  lang3! : string // without '!' it would give error
  private static count: number = 0;
  id! : number;

  constructor(
    public name : string,
    public readonly age : number, // once assigned can't be changed
    private lang1 : string,
    protected lang2 : string = "typescript"
  ){
    this.name = name;
    this.age = age;
    this.lang1 = lang1;
    this.lang2 = lang2;
    this.id = ++coder.count;
  }

  public static getCount = ():number=>coder.count;
}

const c1:coder = new coder("angshu",22,"js");
const c2:coder = new coder("rahul",22,"js");

console.log(c1.id)
console.log(c2.id);
console.log(coder.getCount());

// ******************************** INDEX SIGNATURE *******************************

interface Item{
  // [key : string] : number | number[] | string,
  pizza : number,
  dahi : string,
  icecream : number[]
}

const item1: Item = {
  pizza : 10,
  dahi : "11",
  icecream : [12]
};

// this would give error without signature
// console.log(item1.soda); 

for( const key in item1 ){
  // without signature we use keyof 
  // it creates a union of keys present in object
  console.log(`${key} : ${item1[key as keyof Item]}`);

  // when we don't know the type of item1
  console.log(`${key} : ${item1[key as keyof typeof item1]}`);
}


// *********************************** GENERIC TYPES *****************************


interface boolCheck<T>{
  value : T,
  isObject : boolean
}
const isObj = <T>( arg : T ) : boolCheck<T> =>{
  return {
    value : arg,
    isObject : ( typeof arg==="object" && !Array.isArray(arg) && arg!==null )
  }
}


interface hasId{
  id : number | string
}
const processUser = <T extends hasId,K extends keyof T>( users : T[],key : K ) : T[K][]=>{
  return users.map(user=>user[key]);
}

class MyClass<T>{
  constructor( public data : T ){
    this.data = data;
  }

  get state(): T{
    return this.data;
  }

  set state( data : T ){
    this.data = data;
  }
}

// ******************************* UTILITY TYPES *************************************


// 1. PARTIAL --> partial parts of interface
interface Assignment{
  studentId : (string | number),
  subject : string,
  grade : number,
  verified? : boolean
}

const updateAssignment = ( assign : Assignment, toBeUpdated: Partial<Assignment>):Assignment=>{
  return { ...assign,...toBeUpdated };
}

// 2. REQUIRED ----> makes even the optional ones required

let assign2 : Required<Assignment>;

// 3. READONLY 
let assign3 : Readonly<Assignment>;

// 4. RECORD<T1,T2> ----> just like map in c++
type StudentName = string;
type Grades = number;

type StudentMarks = Record<StudentName,Grades>[];

// 5. PICK<T,PROP1 | PROP2>   && OMIT<T,PROP1 | PROP2>
// PICKS OR OMITS SOME PROPERTY OF OBJECT

// 6. EXCLUDE<T,PROP1 | PROP2> && EXTRACT<T,PROP1 | PROP2>
// INCLUDES OR EXCLUDE SOME PROPS FROM UNION TYPE

type Names = "angshu" | "rahul" | null | undefined;
type NoNullNames = Exclude<Names,null>
type onlyAngshu = Extract<Names,"angshu">


// 7. NON-NULLABLE
type onlyNames = NonNullable<Names>

// 8. RETURN-TYPE && PARAMETER OF FUNCTION

const adding = (a:number,b:number)=>{
  return a + b + '';
}
type addingReturnType = ReturnType<typeof adding>
type addingParameterType = Parameters<typeof adding>

// 9. PROMISE<> && AWAITED<>


