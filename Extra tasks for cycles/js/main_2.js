let number = +prompt("Please provide your number:");

for(let i = 1; i <= 100; i++){

    let a = i**2;

    if(a <= number){
        console.log(i);
    }
  
}
