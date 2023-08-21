let x = +prompt("Provide first number:");
let y = +prompt("Provide second number:");
let znak = prompt("Provide znak:");

function doMath(x, znak, y) {
    
    let result;

    switch (znak) {

        case "+":
            return result = x + y;

        case "-":
            return result = x - y;

        case "*":
            return result = x * y;

        case "/":
            return result = x / y;

        case "%":
            return result = x % y;

        case "^":
            return result = x**y;
    }

}


console.log(doMath(x, znak, y));