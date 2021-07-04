// 1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
function changeParagraph(text) {
  document.getElementsByTagName('p')[1].innerText = text;
}

//2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
function changeColorBackground(color) {
  document.getElementsByClassName('main-content')[0].style.backgroundColor = color;
}

//3. Crie uma função que mude a cor do quadrado vermelho para branco.
function changeColorBackground2(color) {
  document.getElementsByClassName('center-content')[0].style.backgroundColor = color;
}

//4. Crie uma função que corrija o texto da tag <h1>.
function alterText(text) {
  document.getElementsByClassName('title')[0].innerText = text;
}

let text = "Eu me vejo daqui a 2 anos trabalhando em um grande empresa na area de tecnologia, fazendo o que eu gosto, desenvolvendo sistemas para web.";
let color = 'rgb(76,164,109)';
let color2 = '#fff';
let textTitle = "Exercício 5.1 - JavaScript";
changeParagraph(text);

changeColorBackground(color);

changeColorBackground2(color2);

alterText(textTitle);
