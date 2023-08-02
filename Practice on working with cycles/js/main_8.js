let numberUser = +prompt("Please provide a number");

let str = `Делители этого числа:\n`;

let amount = 0;

let count = 0;


for (let i = 1; i <= numberUser; i++) {

    if (numberUser % i !== 0) continue;

    str += `${i} `;

    if (i % 2 == 0) {
        count++;
        amount += i;s
    }

}

alert(str);
alert(`Количество парных делителей: ${count}`);
alert(`Сумма парных делителей: ` + amount);
