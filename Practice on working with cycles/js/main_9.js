let reslt = 1;

for (let i = 1; i <= 10; i++){
    for(let j = 1; j <= 10; j++){
        reslt = i*j;
        reslt = `${i} x ${j} = ${reslt}`;
        document.write(reslt + `<br>`);
    }    
    document.write(`<br>`);
}
