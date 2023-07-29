let aNumber = +prompt("Your number is:");

let number1 = aNumber % 10; 
let result1 = (aNumber - number1) / 10;

let number2 = result1 % 10;
let result2 = (result1 - number2) / 10;

let number3 = result2 % 10;
let result3 = (result2 - number3) / 10;

let number4 = result3 % 10;
let result4 = (result3 - number4) / 10;

let number5 = result4 % 10;
let result5 = (result4 - number5) / 10;

let number6 = result5 % 10;
let result6 = (result5 - number6) / 10;

if(aNumber === null) {
    alert("Попробуйте еще раз")
} else if( number1 === number6 && number2 === number5 && number3 === number4){
    alert("Число зеркальное");
} else {
    alert("Число не зеркальное");
}