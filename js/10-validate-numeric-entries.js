/*eslint-env browser*/

//GLOBAL VARIABLES
var futureValue;
var investment;
var rate;
var years;
var i;

//COLLECT VALUES FROM USER
investment = parseFloat(window.prompt("Enter investment amount as xxxx.xx"));
while (isNaN(investment)){
    window.alert("Not a number"); 
    investment = parseFloat(window.prompt("Enter investment amount as xxxx.xx"));
};
rate = parseFloat(window.prompt("Enter interest rate as xx.x"));
while (isNaN(rate)){
    window.alert("Rate not numeric value");
    rate = parseFloat(window.prompt("Enter interest rate as xx.x"));
};
while (rate > 6) {
    window.alert("Interest Rate is too high"); 
    rate = parseFloat(window.prompt("Enter interest rate as xx.x"));
};
years = parseInt(window.prompt("Enter number of years"), 10);

while (years > 30) {
    window.alert("Years are too high");
    years = parseFloat(window.prompt("Enter number of years"), 10); 
}

// VALIDATE NUMERIC ENTIRES



//CALCULATE FUTURE VALUE
futureValue = investment;
for (i = 1; i <= years; i += 1) {
    futureValue = futureValue + (futureValue * rate / 100);
}

//DISPLAY RESULT
window.document.write("Investment amount: $" + investment + "<br>");
window.document.write("Interest rate: " + rate + "%<br>");
window.document.write("Years: " + years + "<br>");
window.document.write("Future value: $" + parseInt(futureValue, 10));