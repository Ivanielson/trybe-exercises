let n = 20;
let symbol = "*";
let symbolFull = "";

for (let index = 1; index <= n; index += 1) {
  symbolFull = symbolFull + symbol;
}
for (let index = 0; index <= n; index+= 1) {
  console.log(symbolFull);
  
}