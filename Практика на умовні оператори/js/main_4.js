let number = +prompt("Please provide a number");

if (number % 2 === 0){
    src ="The number is an even number";
} else{
    src = "The number is not an even number";
}


alert(`${src}  \nThe last number is ${number%10}`);