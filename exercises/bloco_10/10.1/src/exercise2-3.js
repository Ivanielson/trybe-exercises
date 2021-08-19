// Referências -> Source: https://stackoverflow.com/questions/10003683/how-can-i-extract-a-number-from-a-string-in-javascript

const hydrate = (value) => {
  const numbList = value.match(/\d/g).join(' ').split(' ');
    let result = 0;
    for (let index = 0; index < numbList.length; index += 1) {
      result += parseInt(numbList[index]);
    }
    if (result > 1) return `${result} copos de água`;
  return `${result} copo de água`;
}

module.exports = hydrate;
