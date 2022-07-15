// CONDITIONAL  --IF ELSE (CALCULATOR)
let firstvaluec=prompt("Enter first value");
let secondvaluec=prompt("Enter second value");

let result =Number(firstvaluec) + Number(secondvaluec);
alert(result);

if (result> 100){alert("result greater than 100")}

else if (result< 100){alert ("result lesser than 100")}

else {alert ("result neither greater than nor lesser than 100")}