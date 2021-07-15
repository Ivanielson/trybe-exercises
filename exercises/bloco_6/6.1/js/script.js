const selectEstado = document.querySelector('#select-estado');
const inputDate = document.querySelector('#input-date-start');
const divSelectResult = document.querySelector('.result-form');
const selectButton = document.querySelector('#submit');

const estados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
const siglas = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
function generationSelect() {
  for (let index = 0; index < estados.length; index += 1) {
    const newOption = document.createElement('option');
    newOption.setAttribute('value', siglas[index]);
    newOption.innerText = estados[index];
    selectEstado.appendChild(newOption);
  }
}

generationSelect();

function verificaData() {
  const dateFormat = /^[0-9]{2}\/^[0-9]{2\/[0-9]{4}$/;
  if (!dateFormat.test(inputDate.value)) {
    alert('Preencher data no formato dd/mm/aaaa');
  }
}

function returnForm() {
  const valueForm = [];
  let nome = document.forms.curriculum.nome.value;
  valueForm.push(nome);
  let email = document.forms.curriculum.email.value;
  valueForm.push(email);
  let cpf = document.forms.curriculum.cpf.value;
  valueForm.push(cpf);
  let endereco = document.forms.curriculum.endereco.value;
  valueForm.push(endereco);
  let cidade = document.forms.curriculum.cidade.value;
  valueForm.push(cidade);
  let estado = document.forms.curriculum.estado.value;
  valueForm.push(estado);
  let moradia = document.forms.curriculum.moradia.value;
  valueForm.push(moradia);
  let resumo = document.forms.curriculum.curriculo.value;
  valueForm.push(resumo);
  let cargo = document.forms.curriculum.cargo.value;
  valueForm.push(cargo);
  let descriptionCargo = document.forms.curriculum.description.value;
  valueForm.push(descriptionCargo);
  let dateInicio = document.forms.curriculum.start.value;
  valueForm.push(dateInicio);
  return valueForm;
}

selectButton.addEventListener('click', function (event) {
  event.preventDefault();
  verificaData();
  const result = returnForm();
  for (const value of result) {
    const newParagraph = document.createElement('p');
    newParagraph.innerText = value;
    divSelectResult.appendChild(newParagraph);
  }
  
});

