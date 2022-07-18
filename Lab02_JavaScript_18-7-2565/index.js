/*
var name = 'Jack';
name = 100.00;
    //ค่าตัวแปรจะเกิด errors ได้ ตัวแปร name ข้อมูลต้องเป็นตัวอักษร 
    //แต่สามารถใส่ค่าตัวเลขทับ ตัวแปร name ได้ อาจเกิด errors ขึ้นได้
    //วิธีแก้ปัญหาคือ การใช้ภาษา Typescript
https://www.w3schools.com/typescript/index.php
*/
var name = "Cat";
let lname = 'S.P.';

if(true){
    var a1 = 'varVariable';
    // สร้างตัวแปรใหม่ เป็น var ถ้าเกิดชื่อซ้ำกับตัวแปรอื่นแบบ var 
    //จะไม่มีการแจ้งเตือนและอาจเกิด errors ตามหลังมาได้
}
if(true){
    //สร้างเป็น let ตั้งตัวแปรใหม่ ที่เป็น let แล้วชื่อตัวแปรซ้ำกับตัวแปรอื่น 
    //จะมีการแจ้งเตือน และไม่สามารถ สร้างตัวแปร let ชื่อซ้ำกับตัวแปรอื่นได้
    let a2 = 'letVariable';
    console.log(a2);
}

const pi = 3.14;
// สร้างเป็น const ไม่สามารถแก้ไขค่าได้อีก
// age = 100;
console.log(name, lname, pi);

//function
function functionName(pname){
    console.log('Hello ' + pname);
}
functionName(name)
//function
const functionA = (pname) => {
    console.log('Call from functionA' + pname);
}
functionA(name)

// define value Celsius and Fahrenheit
//f -> c
//c -> f
let Ce = 90;
let Fa = 90;

let Ce2 = (Fa - 32)/1.8;
let Fa2 = (Ce*1.8 )+32;

//function Fahrenheit to Celsius (°F to °C)
function functionFtoC(pCe){
    console.log("F -> C " +pCe + ' Celsius');
}
functionFtoC(Ce2)
//function Celsius to Fahrenheit
function functionCetoFa(pFa){
    console.log("C -> F " + pFa + ' Fahrenheit');
}
functionCetoFa(Fa2)

//function solution short
function kawin (C00toF00){
    const F = 90;
    let CetoFa = (F-32)/1.8;
    console.log("Ce -> Fa" + ' ' + CetoFa);
    let FatoCe = (CetoFa*1.8)+32;
    console.log("Fa -> Ce" + ' ' + FatoCe);
}
kawin()

//Object -> JSON
let person = {
    name: 'cis',
    lastname: 'kku'
}
console.log(person.name);
person.name = 'NKC';
person['name'] = 'IS';
console.log(person);

//create function for Student object
function Student(name, id){
    this.name = name;
    this.id = id;
}
//create obj from Student
let student1 = new Student('Cat', 1);
let student2 = new Student('Dog', 2);
console.log(student1);

//array
let arrName = ['a','b', 10];
arrName[0] = 'CIS';
console.log(arrName[0]);
//foreach
for(let x of arrName){
    console.log(x);
}

//
console.log('10' + 10);