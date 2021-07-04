function changeParagraph(text) {
  document.getElementsByTagName('p')[1].innerText = text;
}

function changeColorBackground(color) {
  document.getElementsByClassName('main-content')[0].style.backgroundColor = color;
}

function changeColorBackground2(color) {
  document.getElementsByClassName('center-content')[0].style.backgroundColor = color;
}

let text = "Eu me vejo daqui a 2 anos trabalhando em um grande empresa na area de tecnologia, fazendo o que eu gosto, desenvolvendo sistemas para web.";
let color = 'rgb(76,164,109)';
let color2 = '#fff';

changeParagraph(text);

changeColorBackground(color);

changeColorBackground2(color2);