let arithmet = 0;
let result;

for(let i = 1; i <= 500 ; i++){
    if(i % 1 === 0){
        arithmet += i;
        result = arithmet / 500;
    }
}

console.log(result);