const array = [1, 2, 3, 4, 5, 6, 7];


function removeElement(array, item) {

    for (let i = 0; i < item; i++) {
        if (array[i] === item) {
            array.splice([i],1)
        }
    }

    return array;

}


removeElement(array, 5);
console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]