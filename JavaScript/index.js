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