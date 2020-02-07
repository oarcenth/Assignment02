//var marcoPolo; 
let i;
let items = "";

for (i=1; i <101; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        items += i + " Marco Polo\n";
    } else if (i % 3 == 0){
        items += i + " Marco\n"; 
    } else if (i % 5 == 0) {
        items += i + " Polo\n";
    }; 
}

window.console.log(items);