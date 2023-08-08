let number = prompt("Your number is:");

let str = ``;

for(let i = 1; i < number; i++){
    if(3**i == number){
        str = `Можна отримати число ${number}, піднявши число 3 до ступеня ${i}`;        
        break;
    } else{
        str = `Не можна отримати число ${number}, піднявши число 3 до певного натурального ступеня`;        
    }
}

alert(str);