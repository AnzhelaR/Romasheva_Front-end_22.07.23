let newNumber = +prompt("Your number is:");

let number1 = newNumber % 10; //3
let result1 = (newNumber - number1) / 10; //12

let number2 = result1 % 10; //2
let result2 = (result1 - number2) / 10; //1

if(number1 === number2 && number2 === result2 && result2 === number1){
    alert("Все числа одинаковые");
} else if(number1 === number2 || number2 === result2 || result2 === number1){
    alert("Только некотрые числа одинаковы");
} else {
    alert("Числа не одинаковые");
}