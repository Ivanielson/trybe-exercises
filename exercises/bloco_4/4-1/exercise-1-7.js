let porcentagem = 0;

if (porcentagem >=90) {
  console.log("Seu conceito é A");
} else if(porcentagem >= 80) {
  console.log("Seu conceito é B");
}else if(porcentagem >= 70) {
  console.log("Seu conceito é C");
}else if(porcentagem >= 60) {
  console.log("Seu conceito é D");
}else if(porcentagem >= 50) {
  console.log("Seu conceito é E");
}else if(porcentagem < 50 && porcentagem >= 0) {
  console.log("Seu conceito é F");
}else if(porcentagem < 0 || porcentagem > 100) {
  console.log("Error: valor informado é inválido!");
}