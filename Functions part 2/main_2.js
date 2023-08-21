
let arr = [];

let arrays = prompt("How many arrays would be here?");

function arraysFunction() {
  for (let i = 0; i < arrays; i++) {
    let elements = prompt(`How many elements would be in array number ${i + 1}`);
    arr[i] = [];
    for (let j = 0; j < elements; j++) {
      let elementsInners = prompt(`Provide an element number ${j + 1} in array ${i+1}`)
      arr[i].push(elementsInners);
    }
  }

  return arr;
}

console.log(arraysFunction());