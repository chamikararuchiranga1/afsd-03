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