let x = window.prompt("Pick a number"); 
let y = window.prompt("Pick a number again"); 

if (x === y) {
    window.alert("Numbers are the same"); 
} else if (x > y ) {
  window.alert(x + " Is the biggest number");  
} else if (x < y) {
    window.alert(y + " Is the biggest number"); 
}
    