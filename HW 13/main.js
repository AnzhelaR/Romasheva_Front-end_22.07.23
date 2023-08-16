
let num = prompt("Provide a number:");
let degree = prompt("Provide a degree:");

function pow(num, degree) {
    if (degree > 1) {
        return num * pow(num, degree - 1);
    }
    return num;
}

console.log(pow(num, degree));