let number = +prompt("What is your number?");

let isSimple;

for(let i = 2; i <= number; i++){

    if(number == i || number % i !== 0) {
        isSimple = `Простое число`; 
        break;
    } else {
        isSimple = `Не простое число`;
        break;
    }

}

alert(isSimple);