var oddOrEven;

for (i=0; i < 16; i++) { // Starting at 0; until i is smaller than 16; keep adding incrementing i by 1 
    oddOrEven = i; 
    if ((i % 2) == 0) {  // % is the modulo -- so if the number divided by 2 has a remainder of 0 then it's even 
    window.console.log(oddOrEven +" is even"); 
    } else {
        window.console.log(oddOrEven +" is odd");
    };
}