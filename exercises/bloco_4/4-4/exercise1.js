// Resolução exercício bloco 4.4 Exercício 1.5
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'sim'
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'sim'
};

for (let key in info) {
  if (info[key] === info2[key]) {
    console.log('Ambos recorrentes');
    continue;
  }
  console.log(info[key] + " e " + info2[key])
}