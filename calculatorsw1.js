// SWITCH STATEMENT (CALCULATOR)
let firstvaluez = prompt ("Enter first value")
let secondvaluez = prompt ("Enter secondvalue")
let result11 = Number(firstvaluez) + Number(secondvaluez);
alert(result11);

switch(true){
case (result11<200):
alert("less than 200")
break;

case (result11>200):
alert("greater than 200")
break;

default:
alert("result neither greater than nor less than 200")
break;
}