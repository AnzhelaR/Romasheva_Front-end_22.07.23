let userNumber = +prompt("Provide a number");

let value1 = userNumber % 10; //5

let restSum = (userNumber - value1) / 10; //1234
let value2 = restSum % 10; //4

let restSum1 = (restSum - value2) / 10; //123
let value3 = restSum1 % 10; //3

let restSum2 = (restSum1 - value3) / 10; //12
let value4 = restSum2 % 10; //2

let restSum3 = (restSum2 - value4) / 10; //12
let value5 = restSum3 % 10; //1


let numbers = `${value5} ${value4} ${value3} ${value2} ${value1}`;

alert(numbers);