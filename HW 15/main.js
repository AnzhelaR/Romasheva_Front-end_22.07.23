const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';


function generateKey(length, characters) {
  
  let result = '';
  let value = '';

  for (let i = 0; i < length; i++) {

    value = Math.floor(Math.random() * characters.length);
    result += characters[value];

  }

  return result;
}

const key = generateKey(16, characters);
console.log(key); // eg599gb60q926j8i
