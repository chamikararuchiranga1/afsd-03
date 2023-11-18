console.log('my web page is running 2nd-----------------')

document.write("ACPT")
document.write("<br>")
document.write("AFSD")

document.write("<h2>ACPT</h2>")

document.write("<button>Click me</button>")

// alert("Chamikara")

// Numbers 
const gh = 12.5;

// String 
const dtring = "Chamikara"

// boolean 
const boo = true

// Object 
const obj = {
    name: "Chmikara",
    run: function() {
        
    }
}

// array 
const array = [12, 45, "acpt" , obj]

// Var / Let / Const

// let 
let l = 10;
// can not redeclared 
// let l = 12;
{let ll = 100};
// console.log(ll);
l = 30;
console.log(l);

// Var 
var v = 234;
// can redeclared 
var v = 67;
console.log(v);
// reassign 
v = 45;
console.log(v);
{var vv = "text"}
console.log(vv);

// const 
const c = 98;
// c = 89;
// const c = "Chamika"
{const cc = 23}
// console.log(cc);

// Arithmetic Operators 
// Addition (+)
const a = 12;
const b = 34;

const addition = a+b;
console.log(addition);

// Subtraction (-)
const sub = b-a;
console.log(sub);

// multiplication (*)
const multi = a*b;;
console.log(multi);

// Division (/)
const div = b/a;
console.log(div);

// Modulus (%)
const mod = b%a;
console.log(mod);

// Increment (++)
let h = 10;
h++ 
h++
console.log(h);

// Decrement (--)
let j =10;
j-- 
j--
console.log(j);

// Comparison Operators 
const e = 13;
const d = 13;

// Equal (==)
console.log("Equal = ", e == d);

// Not Equal (!=)
console.log("Not Equal = ", e != d);

// Greater than (>)
console.log("Greater than = ", e > d);

// Less than (<)
console.log("Less than = ", e < d);

// Greater than or Equal to (>=)
console.log("Greater than or Equal to = ", e >= d);

// Less tha or Equal to 
console.log("Less than or Equal to = ", e <= d);


// Logical Operators 
const y = true;
const x = false;

// AND (&&)
console.log("AND = ", y && x);

// OR (||)
console.log("OR = ", y || x);

// NOT (!)
console.log("NOT = ", !y);

// Function 
function myName (name1, name2, name3) {
    console.log("Student 1 name is : ", name1);
    console.log("Student 2 name is : ", name2);
    console.log("Student 3 name is : ", name3);
    console.log("----------------------------------");
}

// const myName = (name1, name2, name3) => {
//     console.log("Student 1 name is : ", name1);
//     console.log("Student 2 name is : ", name2);
//     console.log("Student 3 name is : ", name3);
//     console.log("----------------------------------");
// }

myName("kasum", "Dasun", "malith");

myName("Milith", "Trishan", "Shashika");

myName("Milith", "Trishan", "Shashika");

myName("Milith", "Trishan", "Shashika");
myName("Milith", "Trishan", "Shashika");
myName("Milith", "Trishan", "Shashika");
myName("Milith", "Trishan", "Shashika");

// Return function 
function numberEqual (num1, num2) {
    const equal = num1 +num2
    return equal;
}

const result = numberEqual(12987, 1564);
console.log(result);

console.log(numberEqual(20, 40));

// Flow Controllers 
// If 
const stud = 600;
const stud1 = 400;

if(stud > stud1){
    if(stud > 100){
        console.log("yes======");
    }
}else if(stud == stud1){
    console.log("2===========");
}else{
    console.log("3===========");
}

// Switch 
const val = "ACPT";
switch (val) {
    case "ACPT":
        console.log("1-------");
        break;

        case "AFSD":
            console.log("2----------");
            break;

    default:
        break;
}

// For loop
const arr = [12, 34, 87, 65];

for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

// While 
let stu = 0;
while (stu < arr.length) {
    console.log(arr[stu],"------");
    stu++;
}
// do while 
let child = 0;
do {
   console.log(arr[child],"********"); 
   child++
}while(child < arr.length);

// break 
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
    if(arr[i] == 87){break;}
}

// Object 
const person = {
    name: "Chamikara",
    address: "Panadura",
    id: "9232348433",
    age: "29",
    run: function(){console.log("run")},
    eat: function(){console.log("eat")},
    sing: function(){console.log("sing")},
}

const name1 = person.id
console.log(name1);

person.run();
person.eat();
person.sing();

// Array 
const arr1 = [45, "chamikara", true, person];
console.log(arr1[3].name);
arr1[3].run()

const fruits = ["Banana", "Orange", "Apple", "Mango"];

// const fruit = fruits.pop();
// console.log(fruits);
// console.log(fruit);

// fruits.push("Kiwi");
// console.log(fruits);

// const fruit = fruits.shift();
// console.log(fruits);
// console.log(fruit);

// fruits.unshift("Kiwi");
// console.log(fruits);



// Events 
// onClick 
function clickMe() {
    console.log("Click Button");
    // document.write("Click Button")
    // alert("Click me")
}

// onChange 
const changeText = () => {
    const text = document.getElementById('change-text').value
    document.getElementById('view-text').value = ""
    console.log(text);
}

// onMouseOver 
const mouseOver = () => {
    document.getElementById('mouse').style.backgroundColor = 'blue'
    document.getElementById('mouse').style.width = '300px'

}

const mouseOut = () => {
    document.getElementById('mouse').style.backgroundColor = 'red'
    document.getElementById('mouse').style.width = '200px'
}

const keyDown = () => {
    console.log("key Down-----");
}

const keyUp = () => {
    console.log("key Up-----");
}

const keyPress = () => {
    console.log("key Press-----");
}

const ChangeName = () => {
    const text = document.getElementById('change-name').value
    document.getElementById('display-1').innerText = text
    // console.log(text);
}