// Resolução exercício bloco 4.4 Exercício 1.4
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

info['recorrente'] = 'sim';

for (let key in info) {
  console.log(info[key]);
}