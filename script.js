const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector('#output-box');

function compareValues(sum,luckyNumber){
    if(sum%luckyNumber===0){
        outputBox.innerText = "Your Birthday is Lucky 🥳";
    }
    else{
        outputBox.innerText = "Your Birthday is not Lucky 😥"
    }
}

function checkBirthDateIsLucky(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if(sum && dob)
    compareValues(sum,luckyNumber.value);
    else
    outputBox.innerText = "Please enter both the fields";
    document.querySelector('#output-box').style.cssText = `width: 50%;
    height: 23%;
    padding: 20px;
    border-radius: 5px;
    border: 1px solid #7C83FD;
    text-align: center;
    margin: auto;
    margin-left: 12%;
    margin-top: 2%;
    background: linear-gradient(to right bottom,#88FFF7,#7DEDFF, #96BAFF,#7C83FD);`;
}
function calculateSum(dob){
    dob = dob.replaceAll("-","");
    let sum = 0;
    for(let i=0;i<dob.length;i++){
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
    
}

checkNumberButton.addEventListener('click',checkBirthDateIsLucky)

