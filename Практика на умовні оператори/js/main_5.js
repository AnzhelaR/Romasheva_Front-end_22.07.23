let userNumber = +prompt("Provide a number");

let value =  userNumber % 10; //2

let result = (userNumber - value) / 10; //1

if (value > result){
    alert(`${value} is bigger than ${result}`);
} else if(value < result){
    alert(`${result} is bigger than ${value}`);
} else {
    alert(`The numbers are equal`);
}