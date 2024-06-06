// Calculator

const display = document.getElementById("display");

function addValue(input){
    display.value += input;
}


function clearDisplay(){
    display.value = "";
}
