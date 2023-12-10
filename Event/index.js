function equal (){
    const number1 = document.getElementById('test-1').value
    const number2 = document.getElementById('test-2').value
    const total = parseInt(number1) + parseInt(number2);
    document.getElementById('display-1').innerText = total
}

function nameEqual (){
    const text1 = document.getElementById('test-3').value
    const text2 = document.getElementById('test-4').value
    if(text1 === text2){
        document.getElementById('display-2').innerText = "Equal"
    }else{
        document.getElementById('display-2').innerText = "Not Equal"
    }
}

function greaterthan () {
    const number1 = document.getElementById('test-5').value
    const number2 = document.getElementById('test-6').value
    if(parseInt(number1) < parseInt(number2)){
        document.getElementById('display-3').innerText = "Greaterthan"
    }else if(parseInt(number1) == parseInt(number2)){
        document.getElementById('display-3').innerText = "Equal"
    }else{
        document.getElementById('display-3').innerText = "Lessthan"
    }
}

function addition () {
    const number = document.getElementById("test-7").value;
    let sum = 0;
    for(let i=0; i<number.length; i++){
        sum += parseInt(number[i]);
    }
    document.getElementById('display-4').innerText = sum
 }

 function enterMarks () {
    const mark = document.getElementById("test-8").value;
    let result = ""
    if(mark >= 75){
        result = "A";
    }else if(mark >= 65){
        result = "B";
    }else if(mark >= 45){
        result = "C";
    }else if(mark >= 35){
        result = "S";
    }else{
        result = "Fail";
    }
    document.getElementById('display-5').innerText = result
 }

function keySubmit () {
    let fullName = "";
    const userInput = document.getElementById("test-9").value

switch (userInput) {
    case 'intern': 
    fullName = "Intern Software Engineer";
    break;
  case "se":
    fullName = "Software Engineer";
    break;
  case "ase":
    fullName = "Associate Software Engineer";
    break;
  case "sse":
    fullName = "Senior Software Engineer";
    break;
  case "atl":
    fullName = "Assistant Tech Lead";
    break;
  case "tl":
    fullName = "Tech Lead";
    break;
  default:
    fullName = "error key word..!";
    break;
}

    document.getElementById('display-6').innerText = fullName
}

function arraySubmit() {
    const userInput = document.getElementById("test-10").value;
    const arr = []
    for(let o=0; o<userInput.length; o++){
        arr.push(" "+userInput[o]+" ")
    }
    document.getElementById('display-7').innerText = arr
}

const numArray = []
function arrayPush() {
    const userInput = document.getElementById("test-11").value
    numArray.push(userInput);
     document.getElementById("test-11").value = "";
}

function arrayPrint() {
    document.getElementById('display-8').innerText = numArray;
}

function login() {
    const uName = 'adMIn';
    const uPass = '12345';
    const userName = document.getElementById("test-12").value
    const password = document.getElementById("test-13").value
    let mms = ""
    if(uName.toLowerCase() == userName.toLowerCase() && uPass.toLowerCase() == password.toLowerCase()){
        mms = 'Login Success..!'
    }else{
        mms = 'Login Fail..!'
    }
    document.getElementById('display-9').innerText = mms;
}

document.getElementById("test-14").value = Math.round(Math.random() * 100);
document.getElementById("test-15").value = Math.round(Math.random() * 100);
function randomNumber() {
    const num1 = parseInt(document.getElementById("test-14").value)
    const num2 = parseInt(document.getElementById("test-15").value)
    document.getElementById('display-10').innerText = num1 + num2;
}


let rArray = [];
for (var i=0; i<50; i++){
    rArray.push(Math.round(Math.random() * 100))
}
document.getElementById('random-display').innerText = rArray;
function randomGenarate(){
    const num = parseInt(document.getElementById("test-16").value);
    let result = [];
    for(let w=0; w<rArray.length; w++){
        if(rArray[w] % num == 0){
            result.push(rArray[w]);
        }
    }
    document.getElementById('display-11').innerText = result;
}