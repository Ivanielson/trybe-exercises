let custProduct = 150.99;
let valueProductVend = 210.50;
let custProducImposto = (custProduct * 0.2) + custProduct;

let result = 1000 * (valueProductVend - custProducImposto);

if (custProduct < 0 || valueProductVend < 0) {
  console.log("Error: o valor de entrada informado é inválido!");
} else {
  console.log("Valor do Lucro: " + "R$ " + result);
}
