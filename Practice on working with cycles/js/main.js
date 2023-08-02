let str = ``;

for(let i = 10; i <= 20; i++){
    if(i == 20){
        str += `${i}`;
    } else{
        str += `${i}, `;
    }    
}

    alert(str);