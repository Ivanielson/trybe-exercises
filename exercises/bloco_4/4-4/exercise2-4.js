// Resolução exercício bloco 4.4 Exercício 2.4
function nameMaxSize(lista) {
  let result = "";
  for (let index = 0; index < lista.length; index += 1) {
    let name = lista[index];
    if (result.length < name.length) {
      result = lista[index];
    }
  }
  return result;
}

let teste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(nameMaxSize(teste));