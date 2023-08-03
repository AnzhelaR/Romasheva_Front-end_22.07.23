let str = ``;


for(let i = 10; i <= 20; i++){

    let act;
    act = `${i**2}`;
    
    if(i == 20){
        str += act;
    } else{
        str += `${act}, `;
    }
}

console.log(str);