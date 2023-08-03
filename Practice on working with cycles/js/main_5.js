let arithmet = 0;
let result;

let divider = 500;

for(let i = 1; i <= divider ; i++){
    if(i % 1 === 0){
        arithmet += i;
        result = arithmet / divider;
    }
}

console.log(result);