// 1. Store the greeting in a variable

// 2. Store the users name in a variable

/* 3. Create the welcome message by concatenating the strings in the two variables */


// 4. Get the element that has an id of greeting

// 5. Replace the content of this element with the personal message. You can use innerHTML 

let greeting = "Hello ";
let Fname = "Friend <br>";
let message = "How is your day :)";

let welcome= greeting + Fname + message;


let sign = "Montaque House";
let tiles = sign,length;
let subtotal = tiles + 5;
let shipping = 100;
let grandTotal = subtotal + shipping;



document.write(welcome);
console.log(welcome);


console.log("\n");
document.write("\n");


let element = document.getElementById("greeting");

element.textContent = message;









