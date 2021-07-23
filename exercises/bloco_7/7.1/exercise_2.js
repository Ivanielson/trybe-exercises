const n = 5;

const fatorial = (n) => {
  let result = 1;
  for (let index = 1; index < n; index += 1) {
    result += result * index;
  }
  return result;
}

console.log(fatorial(n));