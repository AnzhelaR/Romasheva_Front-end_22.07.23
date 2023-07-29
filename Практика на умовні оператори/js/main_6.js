let newNumber = +prompt("Your number is:");

let number1 = newNumber % 10; //3
let result1 = (newNumber - number1) / 10; //12

let number2 = result1 % 10; //2
let result2 = (result1 - number2) / 10; //1

let sum = number1 + number2 + result2;

let product = number1 * number2 * result2;

let reslt = (sum % 2 === 0) ? alert(`Сумма цифр ${result2},${number2},${number1} являеться парной`) : alert(`Сумма цифр ${result2},${number2},${number1} не являеться парной`);

let reslt1 = (sum % 5 === 0) ? alert(`Сумма чисел ${result2},${number2},${number1} кратна 5`) : alert(`Сумма чисел ${result2},${number2},${number1} не кратна 5`);

if(product > 100){
    alert(`Произвидение чисел ${result2},${number2},${number1} больше 100`);
} else if(product < 100){
    alert(`Произвидение чисел ${result2},${number2},${number1} меньше 100`);
} else {    
    alert(`Не число`);
}