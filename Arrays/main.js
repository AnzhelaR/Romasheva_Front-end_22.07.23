let arr = [];

let elemnts = prompt("How many elemets would be here?");

for(let i = 0; i < elemnts; i++){
    let amount = prompt(`Please provide a number:` + `${i + 1}`);
    arr.push(amount);
}

document.write("<p>" + arr + "</p>");
document.write("<p>" + arr.sort(function(a, b) { return a - b; }) + "</p>");
document.write("<p>" + arr.splice(2,3) + "</p>");
document.write("<p>" + arr + "</p>");