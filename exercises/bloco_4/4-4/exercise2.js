// Resolução exercício bloco 4.4 Exercício 2.1
function verificaPalindrome(palavra){
  let invertida = palavra.split("").reverse().join("");
  if (palavra === invertida) {
    return true;
  } else {
    return false;
  }
}

console.log(verificaPalindrome('desenvolvimento'));
