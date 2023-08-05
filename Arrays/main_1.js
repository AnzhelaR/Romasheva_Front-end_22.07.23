let arr = [16,
    -37,
    54,
    -4,
    72,
    -56,
    47,
    4,
    -16,
    25,
    -37,
    46,
    4,
    -51,
    27,
    -63,
    4,
    -54,
    76,
    -4,
    12,
    -35,
    4,
    47];



let sum = 0;

let sumOfPairs = 0;
let sumOfNonePairs = 0;


let produce = 1;

let amount_pos = 0;
let amount_neg = 0;
let amountOfPairs = 0;
let amountOfNonePairs = 0;


let max = arr[0];
let min = arr[0];


for (let i = 0; i < arr.length; i++) {

    let number = i + 1;


    if (arr[i] > 0) {

        sum += arr[i];

        amount_pos += 1;
        amount_neg = arr.length - amount_pos;

        produce *= arr[i];

        if (arr[i] % 2 == 0) {
            amountOfPairs++;
            sumOfPairs += arr[i];
        } else {
            amountOfNonePairs++;
            sumOfNonePairs += arr[i];
        }

    }

    if (arr[i] > max) {
        max = arr[i];
        number_max = number;
    }

    if (arr[i] < min) {
        min = arr[i];
        number_min = number;
    }
}

document.write("<p>" + arr + "</p>");
document.write("<p>" + "сума  позитивних елементів " + sum + "</p>");
document.write("<p>" + "кількість позитивних елементів " + amount_pos + "</p>");

document.write("<p>" + "максимальний  елемент " + max + ` його порядковий номер ` + number_max + "</p>");
document.write("<p>" + "мінімальний елемент " + min + ` його порядковий номер ` + number_min + "</p>");


document.write("<p>" + "кількість негативних елементів " + amount_neg + "</p>");

document.write("<p>" + "кількість непарних позитивних елементів " + amountOfNonePairs + "</p>");
document.write("<p>" + "кількість парних позитивних елементів " + amountOfPairs + "</p>");

document.write("<p>" + "суму парних позитивних елементів " + sumOfPairs + "</p>");

document.write("<p>" + "суму непарних позитивних елементів " + sumOfNonePairs + "</p>");

document.write("<p>" + "добуток позитивних елементів " + produce + "</p>");

document.write(arr.sort(function(a, b) { return a - b; }));
document.write("<p>" + arr.reverse() + "</p>");

arr.splice(1);
document.write("<p>" + arr + "</p>");

