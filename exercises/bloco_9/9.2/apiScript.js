// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const append = (data) => {
  const getParagraph = document.querySelector('#joke');
  const newParagraph = document.createElement('p');
  newParagraph.innerText = data;
  getParagraph.appendChild(newParagraph);
}

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: 'GET',
    headers: {'Accept': 'application/json'}
  };
  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then(({ joke }) => append(joke));
};

window.onload = () => fetchJoke();