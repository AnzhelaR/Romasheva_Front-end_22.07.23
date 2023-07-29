let a = +prompt("Provide a number:");

let b = +prompt("Provide a number:");

if (a === b){
    alert(`Both numbers are dividers for each other`);
} else if(a % b === 0){
    alert(`${b} is the divisor of number ${a}`);
} else if (a % b === 0 && b % a === 0){
    alert(`The same`);
} else if(b % a === 0){
    alert(`${a} is the divisor of number ${b}`);
} else {
    alert(`None of numbers are dividers for each other`);
}
