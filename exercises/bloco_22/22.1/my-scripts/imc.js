const imc = (height, weight) => Math.fround(weight / Math.pow(height, 2)).toFixed(2);

console.log(imc(1.73, 94));