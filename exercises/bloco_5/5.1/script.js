function changeParagraph(text) {
  document.getElementsByTagName('p')[1].innerText = text;
}

let text = "Eu me vejo daqui a 2 anos trabalhando em um grande empresa na area de tecnologia, fazendo o que eu gosto, desenvolvendo sistemas para web.";

changeParagraph(text);

