let numbers = ``;

for (i = 100; i <= 200; i++) {
    if (i % 3 == 0) {
        numbers += `${i} `;
    }
}

console.log(`${numbers}`);