//STEP 1 
let coinFlip = Math.floor(Math.random()* 10); // Math.random() Produces the a random # between 0 and 1 
window.console.log(coinFlip);

//STEP 2 
var choice = prompt("heads or tails?"); 

// STEP 3 - 7

if (coinFlip >=5 && choice == "heads") {
    window.alert("The flip was heads and you chose heads... you win!");
} else if (coinFlip >=5 && choice == "tails") {
    window.alert("The flip was heads but you chose tails...you lose!");
} else if (coinFlip <=5 && choice == "tails") {
    window.alert("The flip was tails and you chose tails... you win!");
} else if (coinFlip <=5 && choice =="heads") {
    window.alert("The flip was tails but you chose heads... you lose!");
}; 



