
let string = prompt("Provide your sentence:");
let arr = [];

let amount = prompt("Enter an amount of symboles should be excluded?");
    for (let i = 0; i < amount; i++) {
        let letters = prompt("What do you want to exlude?");
        arr.push(letters);
    }

function func(string, arr) {

    let result = ``;

    for (let i = 0; i < string.length; i++) {
        
        let equal = false;
        for (let j = 0; j < arr.length; j++) {

            if (arr[j] === string[i]) {
                equal = true;
                break;
            }

        }

        if (!equal)
            result += string[i];

    }


    return result;
}




let result = func(string, arr);
console.log(result);