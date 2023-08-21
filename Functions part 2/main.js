function sumOfNumber() {
   let number = 0;
   return function (value) {
      return number += value;
   }

}

let sum = sumOfNumber();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));