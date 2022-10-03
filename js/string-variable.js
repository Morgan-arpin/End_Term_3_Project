// 1.Create 2 variables to hold the name and message text.


//2. Get the element with an id of name.


//3.Replace the content of this elementby using innerHTML


//4.Get the element with an id of note.


//5.Replace the content of this element using innerHTML.


let today= new Date();
let hour= today.getHours();
let greeting;


if(hour > 12){
    greeting ="good afternoon";
} else if(hour > 18){
    greeting ="good evening";
}else if(hour >0){
    greeting = "good morning";
}else{
    greeting = "welcome";
}
document.write('<h3>'+ greeting + "</h3>");























