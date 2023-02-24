function display(num){
    let outputScreen=document.getElementById("output");
outputScreen.value += num; 
}
function calculate(){
let outputScreen=document.getElementById("output");
outputScreen.value=eval(outputScreen.value);
}
function clearOutput(){
    let outputScreen=document.getElementById("output");
    outputScreen.value=" ";
}
function del(){
    let outputScreen=document.getElementById("output");
    outputScreen.value=outputScreen.value.slice(0,-1);
}