let str = ``;

let lastNumber = 20;

for(let i = 10; i <= lastNumber; i++){
    if(i === lastNumber){
        str += `${i}`;
    } else{
        str += `${i}, `;
    }    
}

    alert(str);