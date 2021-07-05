// Resolução exercício bloco 4.4 Exercício 2.6

function sumAllNumbers(num) {
  let result = 0;
  for (let index = 1; index <= num; index += 1) {
    result += index;
}
return result;
}

console.log(sumAllNumbers(5));
