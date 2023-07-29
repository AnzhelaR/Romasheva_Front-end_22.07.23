let firstNumber = +prompt("Provide a number:");

let secondNumber = +prompt("Provide a number:");

if (firstNumber > secondNumber){
    alert(`Number ${firstNumber} is bigger than ${secondNumber} `)
} else if (firstNumber < secondNumber) {
    alert(`Number ${secondNumber} is bigger than ${firstNumber}`)
} else {
    alert('Numbers are equal')
}