let str = ``;

for(let i = 10; i <= 20; i++){
    if(i == 20){
        str += `${i**2}`;
    } else{
        str += `${i**2}, `;
    }
}

console.log(str);