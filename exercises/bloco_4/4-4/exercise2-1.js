// Resolução exercício bloco 4.4 Exercício 2.2
function keySize(lista) {
  let result = 0;
  let key;
  for (let index = 0; index < teste.length; index += 1) {
    if (result < teste[index]) {
      result = teste[index];
      key = index;
    }
  }
  return key;
}

let teste = [2, 3, 6, 7, 10, 1];
console.log(keySize(teste));