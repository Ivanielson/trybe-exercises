// const n = 5;

// const fatorial = (n) => {
//   let result = 1;
//   for (let index = 1; index < n; index += 1) {
//     result += result * index;
//   }
//   return result;
// }

// console.log(fatorial(n));

const countWordSize = (frase) => {
  const words = frase.split(' ');
  let count = 0;
  let wordSize;
  for (const value of words) {
    if (value.length > count) {
      count = value.length;
      wordSize = value;
    }
  }
  return wordSize;
}

console.log(countWordSize('Antônio foi no banheiro e não sabemos o que aconteceu'));

const getButton = document.querySelector('#button');
const getParagraph = document.querySelector('#count');

getButton.addEventListener('click', (event) => {
  let clickCount = parseInt(getParagraph.innerHTML);
  if (event.target) {
    clickCount += 1;
    getParagraph.innerHTML = clickCount;
  }
});

const textPiloto = 'Olá, me chamo x e agora eu sou Tryber!';

const validationX = (text) => {
  const list = textPiloto.split(' ');
  let result = '';
  const pos = list.indexOf('x');
  list[pos] = text;
  for (const value of list) {
    result += ` ${value}`
  }
  return result.trim();
}

console.log(validationX('Ivanielson'));
const skills = ['HTML', 'JavaScript', 'CSS', 'BootStrap', 'React'];
